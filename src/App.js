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
        }}
        onSubmit={(values) => {
          setForm(values)
        }}
      >
        <Form>
          <Field type="text" name="name" />
          <Field type="email" name="email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <div>
        <ul>
          <li>Name: {form.name}</li>
          <li>Email: {form.email}</li>
        </ul>
      </div>
    </div>
  )
}
