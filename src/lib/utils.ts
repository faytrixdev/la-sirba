export function formatPrice(price: number): string {
  return new Intl.NumberFormat("fr-FR").format(price) + " F";
}

export function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getWhatsAppUrl(phone: string, message?: string): string {
  const base = `https://wa.me/${phone.replace(/\s/g, "")}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

export function getPhoneUrl(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}
