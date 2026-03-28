import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

// ─── Welcome in 16 languages ─────────────────────────────────────────────────
const WELCOMES = [
  { text: "Welcome",          lang: "English"    },
  { text: "Bienvenue",        lang: "Français"   },
  { text: "Bienvenido",       lang: "Español"    },
  { text: "Willkommen",       lang: "Deutsch"    },
  { text: "Benvenuto",        lang: "Italiano"   },
  { text: "Welkom",           lang: "Nederlands" },
  { text: "Välkommen",        lang: "Svenska"    },
  { text: "Добро пожаловать", lang: "Русский"    },
  { text: "欢迎",              lang: "中文"        },
  { text: "ようこそ",           lang: "日本語"      },
  { text: "환영합니다",         lang: "한국어"      },
  { text: "أهلاً وسهلاً",      lang: "العربية"    },
  { text: "स्वागत है",         lang: "हिन्दी"     },
  { text: "Bem-vindo",        lang: "Português"  },
  { text: "Hoş geldiniz",     lang: "Türkçe"     },
  { text: "Karibuni",         lang: "Swahili"    },
];

const vertexShader = /* glsl */`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */`
  uniform sampler2D map;
  uniform vec3      fogColor;
  uniform float     fogNear;
  uniform float     fogFar;
  uniform float     dissolve;
  varying vec2      vUv;

  void main() {
    float depth     = gl_FragCoord.z / gl_FragCoord.w;
    float fogFactor = smoothstep(fogNear, fogFar, depth);

    gl_FragColor      = texture2D(map, vUv);
    gl_FragColor.w   *= pow(gl_FragCoord.z, 20.0);
    gl_FragColor      = mix(gl_FragColor, vec4(fogColor, gl_FragColor.w), fogFactor);
    gl_FragColor.w   *= dissolve;
  }
`;

// ─── Canvas cloud texture (mimics the original cloud10.png puff) ─────────────
function makeCloudTexture(): THREE.Texture {
  const size   = 128;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx    = canvas.getContext("2d")!;

  const blobs = [
    { x: 0.50, y: 0.50, r: 0.42, a: 1.00 },
    { x: 0.35, y: 0.40, r: 0.28, a: 0.85 },
    { x: 0.65, y: 0.38, r: 0.25, a: 0.80 },
    { x: 0.50, y: 0.30, r: 0.22, a: 0.75 },
    { x: 0.28, y: 0.58, r: 0.20, a: 0.70 },
    { x: 0.72, y: 0.56, r: 0.20, a: 0.68 },
    { x: 0.50, y: 0.66, r: 0.18, a: 0.60 },
  ];

  for (const b of blobs) {
    const cx  = b.x * size;
    const cy  = b.y * size;
    const rad = b.r * size;
    const g   = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
    g.addColorStop(0.00, `rgba(255,255,255,${b.a})`);
    g.addColorStop(0.40, `rgba(245,250,255,${b.a * 0.70})`);
    g.addColorStop(0.75, `rgba(220,235,255,${b.a * 0.25})`);
    g.addColorStop(1.00, "rgba(210,228,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
  }

  const tex             = new THREE.CanvasTexture(canvas);
  tex.magFilter         = THREE.LinearFilter;
  tex.minFilter         = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps   = true;
  return tex;
}

export default function CloudAnimation() {
  const mountRef    = useRef<HTMLDivElement>(null);
  const heroRef     = useRef<HTMLElement>(null);
  const dissolveRef = useRef(1);

  const [wIdx,      setWIdx]      = useState(0);
  const [animPhase, setAnimPhase] = useState<"in" | "hold" | "out">("in");
  const [dissolve,  setDissolve]  = useState(1);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const cycle = () => {
      setAnimPhase("in");
      t = setTimeout(() => {
        setAnimPhase("hold");
        t = setTimeout(() => {
          setAnimPhase("out");
          t = setTimeout(() => {
            setWIdx(p => (p + 1) % WELCOMES.length);
            cycle();
          }, 700);
        }, 2200);
      }, 800);
    };
    cycle();
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onScroll = () => {
      const raw  = window.scrollY / hero.clientHeight;
      const fade = 1 - Math.min(Math.max((raw - 0.25) / 0.55, 0), 1);
      dissolveRef.current = fade;
      setDissolve(fade);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = mountRef.current!;
    const W  = el.clientWidth;
    const H  = el.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(W, H);
    renderer.setClearColor(0x4584b4, 0);
    el.appendChild(renderer.domElement);

    // Scene + Camera (original params)
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, W / H, 1, 3000);
    camera.position.z = 6000;

    // Fog
    const fog = new THREE.Fog(0x4584b4, -100, 3000);
    scene.fog = fog;

    // Shader material
    const texture  = makeCloudTexture();
    const uniforms = {
      map:      { value: texture },
      fogColor: { value: fog.color },
      fogNear:  { value: fog.near  },
      fogFar:   { value: fog.far   },
      dissolve: { value: 1.0       },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      depthWrite:  false,
      depthTest:   false,
      transparent: true,
    });

    // Merge 8000 random cloud planes → single draw call
    const planeGeo   = new THREE.PlaneGeometry(64, 64);
    const planeObj   = new THREE.Object3D();
    const geometries: THREE.BufferGeometry[] = [];

    for (let i = 0; i < 8000; i++) {
      planeObj.position.x = Math.random() * 1000 - 500;
      planeObj.position.y = -Math.random() * Math.random() * 200 - 15;
      planeObj.position.z = i;
      planeObj.rotation.z = Math.random() * Math.PI;
      planeObj.scale.x    =
      planeObj.scale.y    = Math.random() * Math.random() * 1.5 + 0.5;
      planeObj.updateMatrix();

      const cloned = planeGeo.clone();
      cloned.applyMatrix4(planeObj.matrix);
      geometries.push(cloned);
    }

    const merged      = mergeGeometries(geometries);
    const cloudMesh   = new THREE.Mesh(merged, material);
    cloudMesh.renderOrder = 2;

    // Second copy offset -8000z for seamless infinite loop
    const cloudMeshB  = cloudMesh.clone();
    cloudMeshB.position.z  = -8000;
    cloudMeshB.renderOrder = 1;

    scene.add(cloudMesh);
    scene.add(cloudMeshB);

    // Mouse parallax
    let mouseX = 0, mouseY = 0;
    const windowHalfX = W / 2;
    const windowHalfY = H / 2;
    const onMouse = (e: MouseEvent) => {
      mouseX = (e.clientX - windowHalfX) * 0.25;
      mouseY = (e.clientY - windowHalfY) * 0.15;
    };
    window.addEventListener("mousemove", onMouse);

    // Resize
    const onResize = () => {
      const nw = el.clientWidth, nh = el.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    // Animate
    const startTime = Date.now();
    let rafId: number;

    const animate = () => {
      rafId = requestAnimationFrame(animate);

      // Forward fly — identical to original
      const position     = ((Date.now() - startTime) * 0.03) % 8000;
      camera.position.x += (mouseX - camera.position.x) * 0.01;
      camera.position.y += (-mouseY - camera.position.y) * 0.01;
      camera.position.z  = -position + 8000;

      uniforms.dissolve.value = dissolveRef.current;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize",    onResize);
      material.dispose();
      texture.dispose();
      merged.dispose();
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  // ── Text animation ────────────────────────────────────────────────────
  const isRTL = WELCOMES[wIdx].lang === "العربية";

  const textStyle: React.CSSProperties = {
    opacity:    animPhase === "hold" ? dissolve : 0,
    transform:  animPhase === "in"
      ? "translateY(22px) scale(0.95)"
      : animPhase === "out"
      ? "translateY(-18px) scale(1.04)"
      : "translateY(0px) scale(1)",
    filter:     animPhase === "hold" ? "blur(0px)" : "blur(5px)",
    transition: animPhase === "in"
      ? "opacity 0.8s ease, transform 0.8s cubic-bezier(.22,1,.36,1), filter 0.8s ease"
      : "opacity 0.55s ease, transform 0.5s ease, filter 0.55s ease",
    direction:     isRTL ? "rtl" : "ltr",
    pointerEvents: "none",
    userSelect:    "none",
  };

  return (
    <>
      <style>{`
      
        .ca-hero {
          position: relative;
          width: 100%;
          height: 100svh;
          overflow: hidden;
          background: #326696;
        }

        /* Sky gradient — bottom matches your blue section */
        .ca-sky {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            #1a4f8a  0%,
            #2e6fd4 20%,
            #4584b4 50%,
            #5a9ec8 78%,
            #326696 100%
          );
          z-index: 0;
        }

        /* Three.js canvas */
        .ca-canvas {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        /* Welcome text — centred in the tunnel */
        .ca-text {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .ca-word {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3.8rem, 10.5vw, 10rem);
          font-weight: 300;
          color: #ffffff;
          line-height: 1;
          text-align: center;
          letter-spacing: -0.01em;
          text-shadow:
            0 2px 32px rgba(20,60,140,0.55),
            0 6px 64px rgba(10,40,100,0.4),
            0 0 100px rgba(255,255,255,0.1);
        }

        .ca-lang {
          font-family: 'Cinzel', serif;
          font-size: clamp(0.58rem, 1.2vw, 0.82rem);
          letter-spacing: 0.52em;
          color: rgba(255,255,255,0.55);
          text-transform: uppercase;
          margin-top: 1.1rem;
        }

        /* Scroll hint */
        .ca-hint {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          animation: ca-bob 2.4s ease-in-out infinite;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }
        .ca-hint span {
          font-family: 'Cinzel', serif;
          font-size: 0.58rem;
          letter-spacing: 0.44em;
          color: rgba(255,255,255,0.45);
          text-transform: uppercase;
        }
        @keyframes ca-bob {
          0%, 100% { transform: translateX(-50%) translateY(0);   }
          50%       { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>

      <section className="ca-hero" ref={heroRef}>
        <div className="ca-sky" />
        <div className="ca-canvas" ref={mountRef} />

        <div className="ca-text">
          <div style={textStyle}>
            <div className="ca-word">{WELCOMES[wIdx].text}</div>
            <div className="ca-lang">{WELCOMES[wIdx].lang}</div>
          </div>
        </div>

        <div className="ca-hint">
          <span>Scroll</span>
          <svg width="16" height="22" viewBox="0 0 16 22" fill="none">
            <rect x="5.5" y="1" width="5" height="10" rx="2.5"
                  stroke="white" strokeWidth="1.4"/>
            <circle cx="8" cy="4.5" r="1.4" fill="white"/>
            <path d="M2 15l6 6 6-6" stroke="white" strokeWidth="1.4"
                  strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>
    </>
  );
}