import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {

    const loggedIn = { firstName : "Zal Hazmi" , lastName : "Musrizal" , email : "zerohazmi@gmail.com"}
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user = {loggedIn?.firstName || "Guest"}
                        subtext='Access and manage your account and transction efficiently.'
                    />

                    <TotalBalanceBox 
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>

                RECENT TRANSACTION

            </div>

            <RightSideBar
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance: 1200}, {currentBalance: 1200}]}
            />
        </section>
    )
}

export default Home
