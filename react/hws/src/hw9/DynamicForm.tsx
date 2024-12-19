import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './DynamicForm.module.css';

const formSchema = z.object({
  firstField: z.string().min(3, 'Минимальная длина 3 символа'),
  secondField: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function DynamicForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstField: '',
      secondField: '',
    },
  });

  const firstFieldValue = watch('firstField');
  const showSecondField = firstFieldValue.length >= 3;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className={styles.formCard}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor='firstField' className={styles.label}>
            Первое поле
          </label>
          <input
            id='firstField'
            className={styles.input}
            {...register('firstField')}
          />
          {errors.firstField && (
            <span className={styles.errorMessage}>
              {errors.firstField.message}
            </span>
          )}
        </div>

        {showSecondField && (
          <div className={styles.formGroup}>
            <label htmlFor='secondField' className={styles.label}>
              Второе поле
            </label>
            <input
              id='secondField'
              className={styles.input}
              {...register('secondField')}
            />
            {errors.secondField && (
              <span className={styles.errorMessage}>
                {errors.secondField.message}
              </span>
            )}
          </div>
        )}

        <button type='submit' className={styles.submitButton}>
          Отправить
        </button>
      </form>
    </div>
  );
}
