import express from "express";

const app = express()
app.use(express.json())
let ETH_BALANCE = 200
let USDC_BALANCE = 700000

app.post('/add_liquidity', (req, res) => {

})
app.post('/buy_asset', (req, res) => {

  // const product = ETH_BALANCE * USDC_BALANCE
  const quantity = req.body.quantity
  const updatedEthQuantity = ETH_BALANCE - quantity
  const updatedUsdcBalance = ETH_BALANCE * USDC_BALANCE / updatedEthQuantity
  const paidAmount = updatedUsdcBalance - USDC_BALANCE

  ETH_BALANCE = updatedEthQuantity
  USDC_BALANCE = updatedUsdcBalance

  res.json({ msg: `you paid ${paidAmount} USDC for ${quantity} ETH ` })
})
app.post('/sell_asset', (req, res) => {
  const quantity = req.body.quantity
  const updatedEthQuantity = ETH_BALANCE + quantity
  const updatedUsdcBalance = ETH_BALANCE * USDC_BALANCE / updatedEthQuantity
  const gottenEth = USDC_BALANCE - updatedUsdcBalance

  ETH_BALANCE = updatedEthQuantity
  USDC_BALANCE = updatedUsdcBalance

  res.json({ msg: `you got ${gottenEth} USDC  for ${quantity} ETH ` })

})
// app.post('/quote', (req, res) => {
//
// })

app.listen(3000, () => console.log('dex server running on port 3000'))
