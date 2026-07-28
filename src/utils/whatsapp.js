const CELI_WHATSAPP_NUMBER = "5515998451287";
const DEFAULT_ORDER_MESSAGE =
  "Olá, Celi! Vim pelo site e gostaria de solicitar um orçamento para um pedido.";

export const celiWhatsappUrl = `https://wa.me/${CELI_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  DEFAULT_ORDER_MESSAGE,
)}`;
