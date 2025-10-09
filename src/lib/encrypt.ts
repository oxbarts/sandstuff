import * as crypto from 'node:crypto'

export function encrypt(slot: string, password: string) {
  const salt = crypto.randomBytes(16)
  const iv = crypto.randomBytes(12)
  const key = crypto.pbkdf2Sync(password, salt, 100_000, 32, 'sha256')
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv)
  let ciphertext = cipher.update(slot, 'utf8')
  ciphertext = Buffer.concat([ciphertext, cipher.final()])
  const authTag = cipher.getAuthTag()
  const b64 = (buf: Buffer) => (buf).toString('base64')
  const payload = {
    salt: b64(salt),
    iv: b64(iv),
    authTag: b64(authTag),
    ciphertext: b64(ciphertext),
    keyHash: b64(crypto.createHash('sha256').update(key).digest()),
  }
  return payload
}

export function xorEncode(text: string, key: string) {
  const t = Buffer.from(text, 'utf8')
  const k = Buffer.from(key, 'utf8')
  const out = t.map((b, i) => b ^ k[i % k.length])
  return Buffer.from(out).toString('base64')
}
