import Script from 'next/script'

export default function page() {
  return (
    <div>your current location

    <Script 
    src="/location.js"
    />
    </div>
  )
}
