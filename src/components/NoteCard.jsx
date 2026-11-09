import { useState } from 'react'

function NoteCard({ title, body }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div>
      <h3 className="pr-8 text-[22px] font-normal break-words">{title}</h3>
      <button
        type="button"
        onClick={() => setIsExpanded((currentValue) => !currentValue)}
        className="mt-3 cursor-pointer text-[15px] font-normal text-[#b83f45] underline"
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
      {isExpanded && (
        <p className="mt-3 text-[17px] break-words whitespace-pre-wrap text-[#4d4d4d]">
          {body}
        </p>
      )}
    </div>
  )
}
 
export default NoteCard