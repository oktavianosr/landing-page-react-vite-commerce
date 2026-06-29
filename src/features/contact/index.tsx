import { notifin } from '@khencahyo13/notifin-react';
import { useForm } from '@tanstack/react-form';
import { useState } from 'react';

import { contactFormDefaultValues, contactFormSchema } from './schema';
import ContactView from './view';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    defaultValues: contactFormDefaultValues,
    validators: {
      onSubmit: contactFormSchema,
    },
    onSubmit: async ({ value }) => {
      // No backend yet — simulate a request, then reset + toast.
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 700));
      setIsSubmitting(false);

      notifin.success('Pesan terkirim!', {
        description: `Terima kasih, ${value.name}. Kami akan segera menghubungi Anda.`,
      });
      form.reset();
    },
  });

  return <ContactView form={form} isSubmitting={isSubmitting} />;
}

export default Contact;
