import Image from 'next/image'

export default function Icon() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/flixa.svg"
        alt="Flixa"
        width={120}
        height={40}
        priority
      />
    </div>
  )
}