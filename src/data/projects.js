function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export const projects = [
  { id: 1, title: 'Brand Campaign — Automotive', category: 'Commercial', tag: 'Color • Edit', videoUrl: '/IMG_9795.MP4' },
  { id: 2, title: 'Music Video — Indie Artist', category: 'Music', tag: 'Full Pipeline', videoUrl: '/IMG_9793.MP4' },
  { id: 3, title: 'Product Launch — Tech', category: 'Ads', tag: 'Motion • Edit', videoUrl: '/IMG_9794.MP4' },
  { id: 4, title: 'Doc Series — Ep. 1', category: 'Documentary', tag: 'Edit • Grade', videoUrl: '/IMG_9796.MP4' },
  { id: 5, title: 'Social Series — 12 Episodes', category: 'Social', tag: 'Edit', videoUrl: '/IMG_9797.MP4' },
  { id: 6, title: 'Fashion Film', category: 'Fashion', tag: 'Color • Motion', videoUrl: '/V.1.mov' },
  { id: 7, title: 'Brand Campaign — Automotive', category: 'Commercial', tag: 'Color • Edit', videoUrl: '/V.2.mp4' },
].map((project) => ({
  ...project,
  slug: slugify(`${project.id}-${project.title}`),
}));

