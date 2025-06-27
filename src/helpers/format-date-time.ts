import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDateTime(rawDate: string): string {
  return format(rawDate, "dd/MM/yyyy 'ás' HH:mm", { locale: ptBR });
}

export function formatRelativeDateTime(rawDate: string): string {
  return formatDistanceToNow(rawDate, { locale: ptBR, addSuffix: true });
}
