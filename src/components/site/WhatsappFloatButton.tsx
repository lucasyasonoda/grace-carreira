import { MessageCircle } from "lucide-react";
import { SITE } from "@/content/site";

// ⏳ Usa o número de WhatsApp definido em SITE.whatsapp — placeholder até a Grace enviar o número definitivo.
export function WhatsappFloatButton() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105 hover:bg-[#20bd5a]"
    >
      <MessageCircle size={26} fill="currentColor" className="text-white" />
    </a>
  );
}
