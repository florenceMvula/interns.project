
/*----------- testmonial----------------*/

(function (){
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')

    const btn_3 = document.querySelectorAll('.btn_3')
    let index = 0
    const customers =[]

    function Customer(img, name, text){
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text){
        let Img = `./img/${img}.jpg`
        let customer = new Customer(Img, name, text)

        customers.push(customer)
    }

    createCustomer(0,'Jessica - Individual Account Holder', "Eziit is truly a financial freedom revolutionary product, it made me feel empowered. I always felt there should be a better way and Eziit proved to be that better way, I pay back exactly what I got and I benefit from paying back through an increase in my reputation collateral, this delighted me alot.")
    createCustomer(1,'Employer Account Holder', 'The adverse effects of financial stress on members of staff and production are vast hence seeing Eziit adequately address this while making our members of staff better off made us feel very pround.')
    createCustomer(2,'Masautso- Merchant Account Holder', 'Eziit really did help us increase our market share and profitability with no additional cost on marketing. It is also a very secure platform since we had total control of everything that concerned our business.')
    createCustomer(3,'Financial Institution Account Holder', 'Eziit is truly a low risk income stream through the Four-Tier EPPVAS secure environment that leaves all stakeholders better off. Being part of the Eziit ecosystem is truelly the true defination of doing good business as it is a mutual benefit product.')
    createCustomer(4,'Womba- None Eziit Account Holder', 'I have no Eziit Account but I have enjoyed using it through the Eziit Pay for Others Vouchers and my family has been able to pay for my school expenses as a group through Eziit Group Payments without having to borrow high interest Loans, such delights me to know we are all safe through Eziit.')

    btn_3.forEach(function(button){
        button.addEventListener('click', function(e){
            if(e.target.parentElement.classList.contains('prevBtn')){
                if(index === 0){
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text

            }

            if(e.target.parentElement.classList.contains('nextBtn')){
                index++
                if(index === customers.length){
                    index = 0
                }
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text

            }
        })
    })

})()




