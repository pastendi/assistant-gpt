import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-6xl font-bold text-primary'>My assistant</h1>
          <p className='py-6 text-lg leading-loose'>
            This is developed to play a role of assitant for me but it can be
            your assitant too. AI is the future and this app can be your AI
            companion to enhance your conversations, content creation and more.
          </p>
          <Link href='/chat' className='btn btn-secondary'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}
