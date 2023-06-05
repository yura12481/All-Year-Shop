import React from 'react';

import { Container, Box, TextField, Button } from '@mui/material';

import {
  useForm,
  Controller,
  SubmitHandler,
  useFormState,
} from 'react-hook-form';

import { emailValidation, passwordValidation } from './validation';

type FormProps = {
  title: string;
  onSub: (email: string, password: string) => void;
};

type AuthForm = {
  email: string;
  password: string;
};

const Form: React.FC<FormProps> = ({ title, onSub }) => {
  const { handleSubmit, control } = useForm<AuthForm>();

  const { errors } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<AuthForm> = (data) =>
    onSub(data.email, data.password);

  return (
    <Container maxWidth="lg">
      <Box sx={{ maxWidth: '400px', mx: 'auto', p: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="email"
            rules={emailValidation}
            render={({ field }) => (
              <TextField
                label="Email address"
                type="email"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={(e) => field.onChange(e)}
                value={field.value || ''}
                error={!!errors.email?.message}
                helperText={errors.email?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={passwordValidation}
            render={({ field }) => (
              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={(e) => field.onChange(e)}
                value={field.value || ''}
                error={!!errors.password?.message}
                helperText={errors.password?.message}
              />
            )}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, height: '56px' }}
          >
            {title}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Form;
