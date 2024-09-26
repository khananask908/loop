import EmojiPicker from 'emoji-picker-react'
import { CloudFog } from 'lucide-react';
import React, { useState } from 'react'

function EmojiPickerComponent({ children , setEmojiIcon }) {
    const [openEmojiPicker, setOpenEmojiPicker] = useState(false)
    return (
      <div onClick={()=>setOpenEmojiPicker(true)}>
        <div>{children}</div>
            {openEmojiPicker &&
                <div className='absolute z-10'>
                    <EmojiPicker
                        emojiStyle='facebook'
                        onEmojiClick={(e) => {
                            setEmojiIcon(e.emoji) 
                            setOpenEmojiPicker(false);
                        }}
                    
                        />
                    
            </div>}
      </div>
    );
}

export default EmojiPickerComponent