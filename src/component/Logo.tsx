import React from 'react'

interface props {

}

const Logo: React.FC<props> = () => {
    return (
        <a href="/">
            <div className="logo flex items-center">
                <img style={{width: 50, marginRight: 10}} src="/images/logo.png" alt="logo" />
                <div className="font-bold text-xl">
                    <span>
                        ROAD <br /> FIXER
                    </span>
                </div>
            </div>
        </a>
        )
}

export default Logo;