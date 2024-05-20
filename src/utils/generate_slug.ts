export function generateSlug(text: string): string {
    return text
        .toLowerCase() // Converte o texto para minúsculas
        .normalize("NFD") // Normaliza para remover acentos
        .replace(/[\u0300-\u036f]/g, "") // Remove os caracteres acentuados
        .replace(/[^\w\s]/g, "") // Remove os símbolos
        .trim() // Remove espaços no início e no fim
        .replace(/\s+/g, "-"); // Substitui espaços por hífens
}