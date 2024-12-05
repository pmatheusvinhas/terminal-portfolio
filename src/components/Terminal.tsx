<Box sx={{ 
  display: 'flex', 
  flexWrap: 'wrap', // Permite quebra de linha
  alignItems: 'center',
  gap: 1, // Espaçamento entre elementos
  '& > *': {
    whiteSpace: 'nowrap' // Mantém cada elemento sem quebra interna
  }
}}>
  <Typography component="span" color="primary.main">
    ~
  </Typography>
  <Typography component="span" color="text.primary">
    /developer$
  </Typography>
  {/* ... resto do conteúdo ... */}
</Box> 