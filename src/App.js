import { useState } from 'react'
import { Formik, Field, Form } from 'formik'

export default function App() {
  const [form, setForm] = useState({})

  return (
    <div>
      <h1>Contact Me</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
        }}
        onSubmit={(values) => {
          setForm(values)
        }}
      >
        <Form>
          <div>
            <Field type="text" name="name" placeholder="Your name" />
          </div>
          <div>
            <Field type="email" name="email" placeholder="Your email address" />
          </div>
          <div>
            <Field type="tel" name="phone" placeholder="Your phone number" />
          </div>
          <input type="submit" value="Submit" />
        </Form>
      </Formik>
      <div>
        <ul>
          <li>Name: {form.name}</li>
          <li>Email: {form.email}</li>
          <li>Phone: {form.phone}</li>
        </ul>
      </div>
    </div>
  )
}
