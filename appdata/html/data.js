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
  intro: [
    "Hi, I'm Johanes. I edit videos, run live production stuff, and tinker with my home network more than I should.",
    "This page is the creative side. The nerdy side lives on the blog."
  ]
};

const CREATIVE_SKILLS = [
  { icon: "fa-solid fa-film",                 title: "Premiere Pro",  desc: "Video editing" },
  { icon: "fa-solid fa-wand-magic-sparkles",  title: "After Effects", desc: "Motion graphics, still learning" },
  { icon: "fa-solid fa-circle-dot",           title: "OBS Studio",    desc: "Streaming & recording" },
  { icon: "fa-solid fa-display",              title: "ProPresenter",  desc: "Live event presentation" }
];

// Isi id = bagian setelah ?v= di link YouTube (contoh: dQw4w9WgXcQ)
// Entry tanpa id otomatis dilewati.
const VIDEOS = [
  { id: "", title: "Judul video 1" },
  { id: "", title: "Judul video 2" },
  { id: "", title: "Judul video 3" },
  { id: "", title: "Judul video 4" }
];
const VIDEO_CHANNEL = "https://www.youtube.com/@johanes_steven_a";

const NETWORK_STACK = ["OpenWrt", "VLAN", "Traefik", "Cloudflare Tunnel", "AdGuard Home", "Docker", "Jellyfin"];
