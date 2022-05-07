import React from 'react'

function CommentFrom() {
  return (
    <div className="form-comment">
        <p className="form-title">Rəy Bildir</p>
        <form>
            <div className="form-name">
                <div>
                    <label>Ad</label>
                    <input type="text" placeholder="Adınızı daxil edin"/>
                </div>
                <div>
                    <label>Soyad</label>
                    <input type="text" placeholder="Soyadınızı daxil edin"/>
                </div>
            </div>
            <label>Rəy bildirdiyiniz məhsulu seçin</label>
            <select>
                <option>Məhsulu seçin</option>
                <option>Məhsulu seçin</option>
                <option>Məhsulu seçin</option>
            </select>
            <label>Rəyinizi yazın</label>
            <textarea placeholder="Rəyinizi buraya yazın"/>
            <button type="button">Rəyini bildir</button>
        </form>
    </div>
  )
}

export default CommentFrom