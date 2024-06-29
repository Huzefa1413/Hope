import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Publications = () => {
  const publications = [
    'Akram, D.S. Agboatwalla. M. A Study of Newborns in Civil Hospital, Karachi. PPJ (1991)',
    'Akram. D.S., Agboatwalla. M. An Epidemic of Meningococcal Disease in Karachi (Pakistan): A study of Children. Acta Pediatric Japonica. (1991)',
    'Akram. D.S., Agboatwalla. M. Growth Parameters of Pakistani Children. Indian J. Pediatric. 58: 825-832 (1991)',
    'Akram. D.S., Agboatwalla. M. Gastroenteritis: A Grass Root Approach. Com Dev J. 27(1): 42-49 (1992)',
    'Akram. D.S. Agboatwalla. M. Morbidity and Mortality Patterns in a Katchi Abadi PPJ. 15 (4): 175-181 (1992)',
    'Akram D.S., Agboatwalla. M. A Model or Health Intervention. J. Top Paed. 38: 85-87 (1992)',
    'S. Isomura, A, Ahmed, Akram D.S. Agboatwalla. M. Epidemiological Studies on Measles in Karachi, Pakistan: Mother knowledge Attitude and Beliefs about Measles and Measles. Vaccine Acta Paed Japan. 34:290-294 (1992)',
    'S. Isomura, Agboatwalla. M. Virological and Serological Studies on Poliomyelitis in Karachi, Pakistan. Outbreaks in 1990-1991.  Acta Paed Japan. 35:382-386 (1993)',
    'Agboatwalla. M. Kirmani S.R. Nerve Conduction Studies and its importance in diagnosis of Acute Poliomyelitis. Ind J. Pediatric – 60:265-268 (1993)',
    'Agboatwalla. M. Kirmani S.R.F.-Latency in Acute Poliomyelitis. Muscle & Nerve 16:798-799 (1993)',
    'M. Roivainen, Agboatwalla. M. Intrathecal Immune Response and Virus Specific Immunoglobulin M. Antibodies in Laboratory Diagnosis of Acute Poliomyelitis. J. Clin Micro: 31 (9): 2427-2432 (1993)',
    'Takeda. N, Sakae. K, Agboatwalla. M. Differentiation Between wild and Vaccine-Derived Strains of Poliovirus by Stringent Micro plate Hybridization of PCR Products. J. Clin Micro. 32(1):202-204 (1994)',
    'R. Nibbeling, Reimerink. J, Agboatwalla. M. Naquib. T.A. Poliovirus Type-specific IgM antibody-capture enzyme-linked immunosorbent assay for rapid diagnosis of Poliomyelitis Clin & Diag Virol. 2: 113-126 (1994)',
    'Terao. K, Shahid. M. Ochikubo. F, Akhter Ahmed, Amjad. M, Kazmi. S.U., Akram. D.S., Agboatwalla. M. Takasu. T, Yoshikawa. Y. The Immune Function and Measles Virus Infection in Three Different Socioeconomic Child Population in Karachi, Pakistan. Jpn J. Med Sci Biol. 47:87-99 (1994)',
    'Agboatwalla. M. Isomura. S, Miyakae. K. Hepatitis A, B and C Seroprevelance in Pakistan. Ind J. Paed. 61:545-549 (1994)',
    'Dean. E, Agboatwalla. M. Dallimore. M. Poliomyelitis Part 1: An Old Problem Revisited. Physiotherapy. 81 (1): 17-22 (1995)',
    'Dean. E, Agboatwalla. M. Dallimore.  M. Poliomyelitis Part 2: Revised Principles of Management. Physiotherapy. 81 (1): 22-28 (1995)',
    'Illa. I, Leon-Manzon. M, Agboatwalla. M. Dure Samin. A, Dalakas. M. Role of Muscle in Acute Poliomyelitis Infection. Annals New York Academy of Sciences. 753: 58-67 (1995)',
    'Illa. I, Leon-Manzon. M, Agboatwalla. M. Ilyas. A. Latov. N, Dalakas. M. Antiganglioside Antibodies in Patients with Acute Polio and Post polio Syndrome. Annals New York Academy of Sciences. 753: 374-377 (1995)',
    'Agboatwalla. M. Isomura. S, Akram. D.S. Enteric Viral Infections in Pre-School Children in Karachi, Pakistan. Ind J Paed. 62: 345-351 (1995)',
    'Agboatwalla. M. Habib Z, Hussain M. Management of Pediatric Patients with Acute Poliomyelitis: A Descriptive Study on 39 Children in Pakistan. Paed Phys Ther. 7: 167-171 (1995)',
    'Agboatwalla. Mubina, Akram. Dure-Samin. An Experiment in Primary Health Care in Karachi, Pakistan. Comm. Dev. J. 30(4): 384-391 (1995)',
    'Houvilainen. A, Mulders. M, Agboatwalla. M. Poyry. T, Stenvik. M, Hovi. t. Genetic Divergence of Poliovirus Strains Isolated in the Karachi Region in Pakistan. J. Gen. Virol 3079-3088 (1995)',
    'Yamashita T, Sakae. K, Kabayashi. S, Isihara. Y. Miyake. T. Agboatwalla. M. Isolation of Cytopathic small round virus (Aichi Virus) from Pakistani children and Japanese Travelers from South East Asia. Microbial Immune. 39(6): 433-435 (1995)',
    'Isomura. S. Agboatwalla. M. Akram. D.S. Epidemiology of Poliomyelitis in Karachi, Pakistan: Prospective Studies during 1990-93. Acta Paed Japan. 38: 667-671 (1996)',
    'Agboatwalla. M. Akram. D.S. Impact of Health Education on Mother’s Knowledge Regarding Preventive Health Practices. Trop Doc. 27.199-202 (1997)',
    'Akram, D.S Agboatwalla. M. Use of Local Cost Effective Diets in the Management of Persistent Diarrhea. J. Trop Paed .43:249 (1997)',
    'Nishimura.T, Komase.K, Terao.K, Agboatwalla.M. Sequence Analysis of the H, F and N Genes of Wild Measles Virus Strains Isolated in Karachi, Pakistan. Nihon UN J Med. 39(6):323-336 (1997)',
    'Agboatwala.M, Aslam.A. Measles Practices and Surveillance in Karachi, Pakistan. Ind J Paed .65:325-327(1998)',
    'Hovi.T, Stenvik.M, Agboatwalla.M. Effect of Administrating Oral and Inactivated Polio Vaccine Immediately after Birth. Eur J Clin Microbial Infect Dis 18:526-527(1999)',
    'Hashido.M, Horie.H, Abe.S, Hashizume.S, Agboatwalla.M, Isomura.S. Evaluation of an Enzyme linked Immunosorbent Assay based on binding inhibition for type specific quantification of Poliovirus Neutralization relevant Antibodies. Microbial Immunol. 43(1): 73-77(1999)',
    'Agboatwalla Mubina. Women’s Development in Pakistan: issues and challenges. Com Dev J. 35 (2): 181-185 (2000)',
    'Nishio.O, Matsui.K,Oka.T,Ushijima.H. Agboatwalla.M. Rotavirus Infection among Infants with Diarrhea in Pakistan. Paed Int  42: 425-427 (2000)',
    'Akram.D.S, Agboatwalla.M, Bharmal.FY. Community Growth Monitoring. JPMA. 50(6):188-91(2000)',
    'White. F,Rahbar.H,Agboatwalla.M.  Elevated Blood Levels in Karachi, Pakistan. Bull WHO. 79 (2). 173 (2001)',
    'Luby S, Agboatwalla M, Raza A, Sobel J, Mintz E, Baier K, Rahbar M, Qureshi S, Hassan R, Ghouri F, Hoekstra R, Gangarosa E. A low-cost intervention for cleaner drinking water in Karachi, Pakistan. International Journal of Infectious Diseases.  5(3):144-150. (2001)',
    'Luby S, Agboatwalla M, Raza A, Sobel J, Mintz ED, Baier K, Hoekstra RM, Rahbar MH, Hassan R, Qureshi SM, Gangarosa EJ. Microbiologic effectiveness of hand washing with soap in an urban squatter settlement, Karachi, Pakistan. Epidemiology and Infection. 127 :237-244 (2001)',
    'Rahbar.H, White.F, Agboatwalla. M. Factors Associated with elevated blood lead concentrations in children in Karachi, Pakistan. Bull WHO.80: 769-775 (2002)',
    'Luby S, Agboatwalla M, Schnell B, Hoekstra RM, Rahbar MH, Keswick B.  The effect of antibacterial soap on impetigo incidence, Karachi, Pakistan.  Journal of the American Society of Tropical Medicine & Hygiene. 67(4): 430-435 (2002)',
    'du Châtelet IP, Merchant AT, Fisher-Hoch S, Luby SP, Plotkin SA, Moatter T, Agboatwalla M, McCormick JB. Serological response and poliovirus excretion following different combined oral and inactivated poliovirus vaccines immunization schedules. Vaccine. 2 ;21(15) :1710-8 (2003)',
    'Luby SP, Agboatwalla M, Hoekstra RM, Rahbar MH, Billhimer W, Keswick B. Delayed effectiveness of home-based interventions in reducing childhood diarrhea, Karachi, Pakistan. Journal of the American Society of Tropical Medicine and Hygiene. In Press',
    'Luby.S, Agboatwalla.,  John Painter, Arshad Altaf, Ward L. Billhimer, Robert M. Hoekstra',
    'Effect of Intensive Handwashing Promotion on Childhood Diarrhea in High-Risk Communities in Pakistan  A Randomized Controlled Trial. JAMA. 2004;291:2547-2554',
    'Luby Stephen P; Agboatwalla Mubina; Billhimer Ward; Hoekstra Robert M. Field trial of a low cost method to evaluate hand cleanliness. Tropical medicine & international health : TM & IH 2007;12(6):765-71',
    'Stephen P. Luby, Mubina Agboatwalla, Daniel R.Feikin, The effect of handwashing on child health: A randomized controlled trial. Lancet. 366:225-233( 2005)',
    'Stephen P. Luby, Mubina Agboatwalla , John Painter , Arshad Altaf , Ward Billhimer Bruce Keswick,4,Robert M Hoekstra . Combined handwashing and drinking water treatment for diarrhea prevention, a cluster randomized control trial. Trop Med Int Health. TM & IH .11(4):479-89.(2006)',
    'Luby.S, Agboatwalla. M, Bowen. A. Difficulties in Maintaining Improved Handwashing Behaviour ,Karachi,Pakistan AJTMH 81 (1).14-145 (2009)',
  ];
  return (
    <>
      <Navbar />
      <div className="scientist-container py-5 mt-5">
        <h1 className="scientist-heading">Research Publications</h1>
        <ul className="blog-features">
          {publications.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Publications;
