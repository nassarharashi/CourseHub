function Container({ children, className = '' }) {
  const classes = ['container mx-auto px-4', className].filter(Boolean).join(' ')

  return <div className={classes}>{children}</div>
}

export default Container
