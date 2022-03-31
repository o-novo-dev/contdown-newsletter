const express = require("express");
const router = express.Router();
const { createClient } = require('@supabase/supabase-js')

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

router.get("/", async (req, res) => {
  try {
    let { data: newslatter, error } = await supabase
    .from('newslatter')
    .select('*')

    if (error){
      res.json({
        success: 'false',
        status: 500,
        message: error.message
      })
    } else {
      res.json({
        success: 'true',
        status: 200,
        message: "Consulta realizada com sucesso!",
        data: newslatter
      })
    }

  } catch (err) {
    res.json({
      success: 'false',
      status: 500,
      message: err.message
    })
  }
})

router.post("/add", async (req, res) => {
  try {
    if (!req.body.email){
      res.json({
        success: 'false',
        status: 500,
        message: 'Preencher o Email.'
      })
    }
    const { newslatter, error } = await supabase
    .from('newslatter')
    .insert([
      { email: req.body.email },
    ])

    if (error){
      res.json({
        success: 'false',
        status: 500,
        message: error.message
      })
    } else {
      res.json({
        success: 'true',
        status: 200,
        message: "Cadastro realizada com sucesso!",
        data: newslatter
      })
    }
  } catch (err) {
    res.json({
      success: 'false',
      status: 500,
      message: error.message
    })
  }

})

module.exports = router;