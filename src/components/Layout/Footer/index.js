import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebSiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>SERVICE CLIENT</FooterLinkTitle>
                                <FooterLink to="/">Aide et FAQ</FooterLink>
                                <FooterLink to="/">Tarifs et options de livraison</FooterLink>
                                <FooterLink to="/">Politique de retour</FooterLink>
                                <FooterLink to="/">Signaler un produit</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>À PROPOS</FooterLinkTitle>
                                <FooterLink to="/">Qui sommes-nous</FooterLink>
                                <FooterLink to="/">Conditions Générales d'Utilisation</FooterLink>
                                <FooterLink to="/">Politique de Confidentialité</FooterLink>
                                <FooterLink to="/">Contact Us</FooterLink>
                                <FooterLink to="/">Nos Sponsors</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>GAGNEZ DE L'ARGENT</FooterLinkTitle>
                                <FooterLink to="/">Vendez sur X-Matos</FooterLink>
                                <FooterLink to="/">Devenez Partenaire</FooterLink>
                                <FooterLink to="/">Faites la promotion de vos produis</FooterLink>
                                <FooterLink to="/">Tous nos programmes</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>RETROUVEZ-NOUS SUR</FooterLinkTitle>
                                <FooterLink to="/">Facebook</FooterLink>
                                <FooterLink to="/">Instagram</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                                <FooterLink to="/">LinkedIn</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to ='/'><img src="images/logo2.png" class="image" alt="" /></SocialLogo>
                        <WebSiteRights>X-MATOS © 2021 All rights reserved.</WebSiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" 
                            aria-label="Facbook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="LinkedIn">
                                <FaLinkedinIn/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
