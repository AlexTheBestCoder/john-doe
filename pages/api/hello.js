export default function handler(req, res) {
  
  res.status(200).json([
    { name: 'John Doe', id: 1 },
    {name: 'Jane Doe', id: 2}
  ])
  
}
