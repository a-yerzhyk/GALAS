export default function Toast ({ message }) {
  return (
    <div className="px-6 py-2 rounded-md shadow-lg toast">
      <div className="text-center text-lg font-semibold text-white toast__message ">
        {message}
      </div>
    </div>
  )
}