<CartProvider> 
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/women" element={<Woman />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </Router>
</CartProvider>
