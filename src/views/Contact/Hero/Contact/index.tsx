import React, { useCallback, useRef } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router';

import Input, { InputRef } from 'components/Input';
import Button from 'components/Button';
import styled from './Contact.module.css'
import api from 'services/api';
import Textarea, { TextAreaRef } from 'components/Textarea';

const Contact: React.FC = () => {
  const router = useRouter();
  
  const nameRef = useRef<InputRef>(null);
  const phoneRef = useRef<InputRef>(null);
  const emailRef = useRef<InputRef>(null);
  const messageRef = useRef<TextAreaRef>(null);

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
      const name = nameRef.current?.value;
      if (!name || name.length < 2) {
        emailRef.current?.setError('enter a valid name!');
        return;
      }
      nameRef.current?.setError('');
      //
      const phone = phoneRef.current?.value;
      if (!phone || phone.length < 12) {
        phoneRef.current?.setError('enter a valid phone number!');
        return;
      }
      phoneRef.current?.setError('');
      //
      const message = messageRef.current?.value;
      if (!message || message.length < 8) {
        messageRef.current?.setError('enter a valid message!');
        return;
      }
      console.log(message)
      messageRef.current?.setError('');

      try {
        api.post('/contact', {
          email,
          name,
          phone
        })
        //
        if ('dataLayer' in window) {
          window.dataLayer.push({
            event: 'contact',
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
        <Input
          name="name"
          label="Your name"
          ref={nameRef}
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
        <Textarea 
          name="message"
          label="Your Message"
          ref={messageRef}
        />
        <Button
          component='button'
          type="submit"
        >
          <p>submit your message</p>
          <Image 
            src={require('assets/icons/arrow-right.svg')}
            alt="Quote icon"
          />
        </Button>
      </form>
    </section>
  )
}

export default Contact;