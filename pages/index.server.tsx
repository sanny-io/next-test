import Image from 'next/image'
import Link from 'next/link'
import catImage from '../public/images/cat.webp'

export default function HomePage() {
  // return (
  //   <Image
  //     src={catImage}
  //     layout="fill"
  //   />
  // )

  return (
    <Link href="/test">
      <a>
        Test
      </a>
    </Link>
  )
}