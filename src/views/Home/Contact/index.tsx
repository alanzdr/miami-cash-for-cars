import React, { useCallback, useRef } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router';

import Select, { SelectREF } from 'components/Select';
import Input, { InputRef } from 'components/Input';
import Button from 'components/Button';
import styled from './Contact.module.css'
import { SELECT_MAKE } from 'utils/form.data';
import api from 'services/api';

const Contact: React.FC = () => {
  const router = useRouter();
  
  const makeRef = useRef<SelectREF>(null);
  const modelRef = useRef<InputRef>(null);
  const phoneRef = useRef<InputRef>(null);
  const emailRef = useRef<InputRef>(null);

  const onSubmitForm = useCallback(
    (ev: React.FormEvent) => {
      ev.preventDefault()

      //
      const email = emailRef.current?.value;
      if (!email || email.length < 3) {
        emailRef.current?.setError('enter a valid email!');
        return;
      }
      emailRef.current?.setError('');
      //
      const model = modelRef.current?.value;
      if (!model || model.length < 2) {
        emailRef.current?.setError('enter a valid model!');
        return;
      }
      modelRef.current?.setError('');
      //
      const phone = phoneRef.current?.value;
      if (!phone || phone.length < 12) {
        phoneRef.current?.setError('enter a valid phone number!');
        return;
      }
      phoneRef.current?.setError('');
      //
      const make = makeRef.current?.value;
      if (!make) {
        return;
      }

      try {
        api.post('/conversion', {
          email,
          model,
          make,
          phone
        })
        //
        if ('dataLayer' in window) {
          window.dataLayer.push({
            event: 'conversion',
          });
        }
        // alert('')
        router.push('/tankyou')
      } catch (error) {
        console.error(error);
      }
    },
    [router]
  )

  return (
    <section className={styled.contact}>
      <form onSubmit={onSubmitForm} className={`${styled.form} container`}>
        <Select
          ref={makeRef}
          name="make"
          label="Vehicle Make"
          options={SELECT_MAKE}
        />
        <Input
          name="model"
          minLength={3}
          label="Vehicle Model"
          ref={modelRef}
        />
        <Input
          name="phone"
          minLength={7}
          label="Your Phone"
          ref={phoneRef}
          mask="tel"
          type="tel"
        />
        <Input
          name="email"
          minLength={7}
          label="Your Email"
          ref={emailRef}
          mask="email"
          type="email"
        />
        <Button
          component='button'
          type="submit"
        >
          <Image 
            src={require('assets/icons/quote.svg')}
            alt="Quote icon"
          />
          <p>get a quote</p>
        </Button>
      </form>
    </section>
  )
}

export default Contact;