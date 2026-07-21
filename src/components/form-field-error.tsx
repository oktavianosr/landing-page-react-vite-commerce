/** Normalise TanStack Form / Standard Schema issues into display strings. */
function errorMessages(errors: unknown[]): string[] {
  return errors
    .map((error) =>
      typeof error === 'string' ? error : ((error as { message?: string } | null)?.message ?? null)
    )
    .filter((message): message is string => Boolean(message));
}

export function FieldError({ errors }: { errors: unknown[] }) {
  const messages = errorMessages(errors);
  if (messages.length === 0) return null;
  return <p className="text-destructive text-sm">{messages[0]}</p>;
}
