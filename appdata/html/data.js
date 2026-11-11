const PROFILE = {
  avatar: "assets/pic.jpg",
  name: "Johanes Steven",                 // nama yang tampil di bawah avatar
  tagline: "Just a chill guy who enjoys computer networking and self-hosting things I probably don't need.",
  footer: "Johanes Steven © 2026"
};

const PAGE_LINKS = [
  {
//    href: "https://about.johanz.my.id",
    href: "about/",
    icon: "fa-solid fa-user",
    title: "About Me"
  },
  {
    href: "https://blog.johanz.my.id",
    icon: "fa-solid fa-blog",
    title: "Blog",
	newTab: true
  }
];


const SOCIAL_LINKS = [
  {
    href: "https://www.youtube.com/@johanes_steven_a",
    icon: "fa-brands fa-youtube",
    title: "Johanes Steven",
    desc: "Edited Video Archive",
    className: "btn-youtube"
  },
  {
    href: "https://www.youtube.com/@johanes_aldestya",
    icon: "fa-brands fa-youtube",
    title: "Mas Johanes",
    desc: "Personal Channel",
    className: "btn-youtube"
  },
  {
    href: "https://instagram.com/johanes_steven.a",
    icon: "fa-brands fa-instagram",
    title: "Instagram",
    desc: "@johanes_steven.a",
    className: "btn-instagram"
  },
  {
    href: "https://www.threads.com/@johanes_steven.a",
    icon: "fa-brands fa-threads",
    title: "Threads",
    desc: "@johanes_steven.a",
    className: "btn-threads"
  },
  {
    href: "https://github.com/jstevena",
    icon: "fa-brands fa-github",
    title: "Github",
    desc: "github.com/jstevena",
    className: "btn-github"
  }
];

// - Contact Links -
const CONTACT_LINKS = [
  {
    href: "mailto:johanz@duck.com",
    icon: "fa-solid fa-envelope",
    platform: "Email",
    value: "johanz@duck.com",
    className: "btn-email"
  },
  {
    href: "https://discord.com/users/395147717233475587",
    icon: "fa-brands fa-discord",
    platform: "Discord",
    value: "@biji.meledak",
    className: "btn-discord"
  }
];

// - About page (about/index.html) -
const ABOUT = {
  headline: "I make videos, run the live side of events, and keep a home network alive.",
  intro: [
    "Editing is where I started: short films, event after movies, and the occasional VFX experiment I'm not sure I'm qualified for.",
	"I honestly only open Adobe apps once a year, lol",
    "Outside of that I'm deep in networking and self-hosting. That part lives on the blog."
  ]
};

// icon = file .png (taruh di assets/icons/). Kalau file belum ada, otomatis jatuh ke kotak abbr berwarna (bg/fg).
const CREATIVE_SKILLS = [
  { icon: "../assets/icons/premiere-pro.png", abbr: "Pr", bg: "#1f1147", fg: "#ea77ff", title: "Premiere Pro",  desc: "Main editing tool, still learning" },
  { icon: "../assets/icons/after-effects.png", abbr: "Ae", bg: "#161040", fg: "#9999ff", title: "After Effects", desc: "Motion & VFX, still newbie" },
  { icon: "../assets/icons/obs-studio.png", abbr: "Ob", bg: "#222226", fg: "#e8e8ea", title: "OBS Studio",    desc: "Streaming & recording" },
  { icon: "../assets/icons/propresenter.png", abbr: "Pp", bg: "#0f2f4a", fg: "#6fb3e0", title: "ProPresenter",  desc: "Live event presentation" }
];

const VIDEOS = [
  { id: "Ds6igBIVl0Y", title: "VFX Augmented Hologram Phone" },
  { id: "_yHVj1tUAKI", title: "Short Movie Pulang Kampung Rindu" },
  { id: "jKxPYecN_2U", title: "After Movie PMK UPI 2025" },
  { id: "hSRvOoffRB0", title: "Video Edukasi Pilah Sampah" }
];
const VIDEO_CHANNEL = "https://www.youtube.com/@johanes_steven_a";

const NETWORK_STACK = ["OpenWrt", "VLAN", "Traefik", "Cloudflare Tunnel", "AdGuard Home", "Docker", "Jellyfin"];

// img: isi path gambar (misal "../assets/topologi.png") kalau sudah ada
const NETWORK_SLOTS = [
  { title: "Network topology", img: "" },
  { title: "Homepage dashboard", img: "" }
];
