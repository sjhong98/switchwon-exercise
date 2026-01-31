export default function ExchangeTitle({ title, description }: { title: string, description: string }) {
    return (
        <div className='flex flex-col w-full h-full gap-3'>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <h2 className='text-lg text-gray-700'>{description}</h2>
        </div>
    )
}