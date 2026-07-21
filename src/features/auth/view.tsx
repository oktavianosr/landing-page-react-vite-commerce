import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import LoginForm from './components/form';
import type { LoginViewProps } from './types';

function LoginView({ form, isSubmitting, error }: LoginViewProps) {
  return (
    <div className="flex min-h-svh items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Masuk Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm form={form} isSubmitting={isSubmitting} error={error} />
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginView;
