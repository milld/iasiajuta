import React, { Component } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #2ecc71;
  color: white;
  padding: 48px;
  margin-top: 24px;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
`;

const Paragraph = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  font-size: 14px;
`;

const SmallParagraph = styled.h4`
  margin: 0;
  margin-bottom: 2px;
  font-size: 10px;
`;

const Image = styled.img`
  width: 120px;
`;

const Link = styled.a`
  color: white;
  text-decoration: underline;
`;

const Footer = ({ paragraphs, image, imageAlt }) => (
  <FooterContainer>
    {paragraphs}

    <Image src={image} alt={imageAlt} />
  </FooterContainer>
);

Footer.defaultProps = {
  paragraphs: [
    <Paragraph>Atât?</Paragraph>,
    <Paragraph>Simplă și ușor de folosit, platforma IasiAjuta oferă oportunități de implicare la un click distanță.</Paragraph>,
    <Paragraph>În plus, IașiAjută este deschisă din toate punctele de vedere. Ajută-ne cu <Link href='https://github.com/milld/iasiajuta/' target='_blank'>îmbunătățirea platformei</Link>, în timp ce noi suportăm <Link href='https://docs.google.com/spreadsheets/d/1FK-hN8_foDm0tToiuTyelfBD8AdOlDJZUchyyqOCspg/edit?usp=sharing' target='_blank'>cheltuielile</Link>.</Paragraph>
  ],
  image: '/logo_milld.png',
  imageAlt: 'Milld Logo'
};

export default Footer;