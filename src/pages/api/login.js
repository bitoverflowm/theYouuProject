import { magic } from '@/lib/magic'
import { setLoginSession } from '@/lib/auth'
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

async function checkIfUserExists(email) {
  await dbConnect()
  const user = await User.findOne({ email })
  if(user){
    console.log('user exists', user._id)
    return user._id
  } else {
    try {
      console.log('user does not exists creating user now')
      let url
      if (process.env.NODE_ENV === 'development') {
        url = 'http://localhost:3000/api/users/'        
      } else if (process.env.NODE_ENV === 'production') {
        url = 'https://www.theyouuproject.com/api/users/'
      }
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          "mgkIssuer": session.issuer,
          "email": session.email,
          "mgkpublicAddress": session.publicAddress,
          "confirmedAt": session.confirmedAt ? new Date(session.confirmedAt) : null,
          "lastLoginAt": session.lastLoginAt ? new Date(session.lastLoginAt) : null,
          "metadata": session.metadata
        }),
      })
      if(!res.ok) {
        throw new Error(await res.text())
      }
      const user = await res.json();
      return user._id
    }catch (error) {
      console.log(error, 'Failed to add usr to db')
    }    
  }
}

export default async (req, res) => {
  try {
    if (req.method !=='POST') return res.status(405).end();
    
    const didToken = req.headers.authorization.slice(7)
    const metadata = await magic.users.getMetadataByToken(didToken)
    const session = { ...metadata }
    //check if previously registered user
    let userId = await checkIfUserExists(session.email)
    session.userId = userId
    await setLoginSession(res, session)
    res.status(200).send({ done: true, userId: userId })
  } catch (error) {
    res.status(error.status || 500).send(error.message)
  }
}