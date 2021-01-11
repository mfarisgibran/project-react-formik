import { Formik, Field, Form } from 'formik'

export default function App() {
  return (
    <div>
      <h1>Contact Me</h1>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        <Form>
          <Field type="text" name="name" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}
