describe('template spec', () => {

  beforeEach(() => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('x@gmail.com')
    cy.get('[data-testid="senha"]').type('teste')
    cy.get('[data-testid="entrar"]').click()
  })

  it('deve acessar a tela de produtos', () => {
    cy.url().should('include', '/home') // valida se foi para home
  })
  
   /*it.only('Cadastrar usuário', () => {
    cy.get('[data-testid="cadastrar"]').click()
    cy.url().should('include', '/cadastrarusuarios') 
    cy.get('[data-testid="nome"]').type('Pedroso2')
    cy.get('[data-testid="email"]').type('pedrosoqa2@gmail.com')
    cy.get('[data-testid="password"]').type('teste')
    cy.get('[data-testid="password"]').click()

  }) */

   /* it('Buscar usuário', () =>{
      cy.get('[data-testid="listarUsuarios"]').click()
      cy.url().should('include', '/listarusuarios') // 
      cy.get('body').should('contain.text', 'cadastroteste1@gmail.com')

    }) */

     /*  it('Cadastrar produtos', () =>{
        cy.get('[data-testid="cadastrar-produtos"]').click()
        cy.url().should('include', '/cadastrarprodutos')
        cy.get('[data-testid="nome"]').type('Motorola XYZ')
        cy.get('[data-testid="preco"]').type('1000')
        cy.get('[data-testid="descricao"]').type('Celular Anti Furto')
        cy.get('[data-testid="quantity"]').type('1')
        const filePath = 'cel.jpeg';
        cy.get('input[type="file"]').attachFile(filePath)
        cy.get('[data-testid="cadastarProdutos"]').click()

      }) */

     /*  it('Buscar produtos', () =>{
      cy.get('[data-testid="listarProdutos"]').click()
      cy.url().should('include', '/listarprodutos') // 
      cy.get('body').should('contain.text', 'Motorola XYZ') 

    }) */


      it('Adicionar produto ao carrinho', () =>{
        cy.url().should('include', '/home')
        cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').should('be.visible').and('not.be.disabled').click()
        cy.url().should('include', '/minhaListaDeProduto')
       
      })
  
      it('Aumentar a quantidade de Produtos na minha lista', () =>{
      cy.url().should('include', '/home')
      cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]')
      .should('be.visible')
      .click()
       cy.url().should('include', '/minhaListaDeProdutos')
      // quantidade antes
      cy.get('[data-testid="shopping-cart-product-quantity"] > p')
      .should('contain.text', '1')
      // preço antes
       cy.get('.card-body > :nth-child(2) > :nth-child(1)')
      .should('contain.text', 'R$659')
      // aumenta quantidade
      cy.get('[data-testid="product-increase-quantity"]').click()
       // valida quantidade depois
       cy.get('[data-testid="shopping-cart-product-quantity"] > p')
       .should('contain.text', '2')
       // valida preço mudou
        cy.get('.card-body > :nth-child(2) > :nth-child(1)')
       .should('not.have.text', 'R$1.318')
})
    
      
})


