import { useState } from 'react'
import { Button, Card, Form, Input, Typography } from 'antd'
import { Toast } from '../shared/components/Toast'

type TFormData = {
  name: string
  description: string
}

const { Title } = Typography

export const HW19 = () => {
  const [submittedData, setSubmittedData] = useState<TFormData | null>(null)

  const onFinish = (values: TFormData) => {
    setSubmittedData(values)
  }

  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '1rem',
      }}
    >
      <Title level={2}>Form input data</Title>

      <Form
        name='basic'
        layout='vertical'
        onFinish={onFinish}
        autoComplete='off'
      >
        <Form.Item
          label='Name'
          name='name'
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Description'
          name='description'
          rules={[
            { required: true, message: 'Please input your description!' },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>

      {submittedData && (
        <Toast
          type='success'
          message={`Form submitted successfully. Name: ${submittedData.name}, Description: ${submittedData.description}`}
          onClose={() => setSubmittedData(null)}
        />
      )}

      {submittedData && (
        <Card title='Отправленные данные' style={{ marginTop: '2rem' }}>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Description:</strong> {submittedData.description}
          </p>
        </Card>
      )}
    </div>
  )
}
