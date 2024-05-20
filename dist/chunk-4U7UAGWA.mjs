// src/utils/generate_slug.ts
function generateSlug(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/g, "").trim().replace(/\s+/g, "-");
}

export {
  generateSlug
};
