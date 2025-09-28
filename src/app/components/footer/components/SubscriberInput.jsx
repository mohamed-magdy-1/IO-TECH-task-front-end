'use client';

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { api } from '@/app/featchData/api';
import toast, { Toaster } from 'react-hot-toast';

export default function SubscriberInput() {

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('البريد الإلكتروني غير صالح')
        .required('الإيميل مطلوب'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await api.get(`/subscribers?filters[UserEmail][$eq]=${values.email}`);
        if (res.data.data.length > 0) {
          toast.error('هذا البريد موجود بالفعل');
          return;
        }

        await api.post('/subscribers', { data: { UserEmail: values.email } });
        toast.success('تم الاشتراك بنجاح');
        resetForm();

      } catch (err) {
        toast.error('حصل خطأ أثناء الاشتراك');
      }
    },
  });

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={formik.handleSubmit}>
        <div className='bg-white my-[5px] w-[223px] flex justify-between items-center h-[41px] relative p-2 rounded-[6px]'>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="w-[93px] border-none outline-none placeholder:text-black placeholder:capitalize placeholder:font-normal placeholder:text-[16px] placeholder:leading-[20px]"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <button
            type="submit"
            className='w-[101px] h-[30px] bg-[#4B2615] text-white rounded-[8px]'
          >
            Subscribe
          </button>
        </div>
      </form>
    </>
  );
}
