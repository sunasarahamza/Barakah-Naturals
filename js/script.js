const BUSINESS_CONFIG = {name:'Barakah Naturals',whatsapp:'919372233835',email:'sheliyadanish@gmail.com',phone:'+91 8108559909'};
const products = [
  {id:'multi-flora-honey',name:'Multi-flora Honey',description:'A versatile honey for everyday retail and wholesale supply.',sizes:['250g','500g','1kg','5kg','25kg'],image:'img/product1.png'},
  {id:'forest-honey',name:'Forest Honey',description:'A naturally rich honey prized for its deep flavor and closer-to-nature profile.',sizes:['500g','1kg','5kg','25kg'],image:'img/product2.png'},
  {id:'kashmiri-honey',name:'Kashmiri Honey',description:'A premium honey choice for retailers, distributors, and growing businesses seeking high-quality bulk supply.',sizes:['5kg','10kg','25kg','50kg'],image:'img/product3.png'}
];

const whatsappUrl = message => `https://wa.me/${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
const defaultMessage = `Hello ${BUSINESS_CONFIG.name},\n\nI am interested in your honey products.\n\nPlease share your product details, wholesale pricing, minimum order quantity and delivery information.\n\nThank you.`;
const emailUrl = (subject='Wholesale Honey Inquiry - Barakah Naturals', body=`Hello ${BUSINESS_CONFIG.name},\n\nI am interested in purchasing honey in wholesale quantity.\n\nProduct:\nQuantity:\nBusiness Name:\nPhone Number:\nLocation:\n\nPlease share your wholesale pricing, minimum order quantity and delivery details.\n\nThank you.`) => `mailto:${BUSINESS_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
const gmailUrl = (subject, body) => `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(BUSINESS_CONFIG.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const productGrid = document.querySelector('#product-grid');
const productSelect = document.querySelector('#product');
products.forEach((product,index) => {
  const card = document.createElement('article');
  card.className = 'product-card reveal';
  card.innerHTML = `<div class="product-art"><img src="${product.image}" alt="${product.name}" loading="lazy"><span class="product-number">0${index+1}</span></div><div class="product-info"><h3>${product.name}</h3><p>${product.description}</p><div class="sizes">${product.sizes.map(size => `<span>${size}</span>`).join('')}</div><div class="product-action"><span>Wholesale available</span><a href="${whatsappUrl(`Hello ${BUSINESS_CONFIG.name},\n\nI am interested in your ${product.name}.\n\nPlease share wholesale price, available quantities, packaging options and delivery details.\n\nThank you.`)}" target="_blank" rel="noopener">Enquire now ↗</a></div></div>`;
  productGrid.appendChild(card);
  const option = document.createElement('option'); option.value = product.name; option.textContent = product.name; productSelect.appendChild(option);
});

document.querySelectorAll('#whatsapp-link,#floating-whatsapp').forEach(link => {link.href=whatsappUrl(defaultMessage);link.target='_blank';link.rel='noopener';});
const emailLink=document.querySelector('#email-link'); emailLink.href=gmailUrl('Wholesale Honey Inquiry - Barakah Naturals', `Hello ${BUSINESS_CONFIG.name},\n\nI am interested in purchasing honey in wholesale quantity.\n\nProduct:\nQuantity:\nBusiness Name:\nPhone Number:\nLocation:\n\nPlease share your wholesale pricing, minimum order quantity and delivery details.\n\nThank you.`); emailLink.target='_blank'; emailLink.rel='noopener';
const phoneLink=document.querySelector('#phone-link'); phoneLink.href=`tel:${BUSINESS_CONFIG.phone.replace(/\s/g,'')}`; document.querySelector('#phone-display').firstChild.textContent=`${BUSINESS_CONFIG.phone} `;

const header=document.querySelector('#site-header');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>10),{passive:true});
const menuToggle=document.querySelector('.menu-toggle'), nav=document.querySelector('.site-nav');
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.classList.toggle('open',open);menuToggle.setAttribute('aria-expanded',open);menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));

document.querySelector('#inquiry-form').addEventListener('submit',event=>{event.preventDefault();const form=new FormData(event.currentTarget);const status=document.querySelector('#form-status');const required=[['fullName','Please enter your name.'],['phone','Please enter a valid phone number.'],['product','Please select a product.'],['quantity','Please enter the required quantity.']];const invalid=required.find(([field])=>!String(form.get(field)||'').trim()||(field==='phone'&&!/[0-9]{7,}/.test(String(form.get(field)))));if(invalid){status.textContent=invalid[1];document.querySelector(`[name="${invalid[0]}"]`).focus();return;}const message=`Hello ${BUSINESS_CONFIG.name},\n\nI would like to make a wholesale inquiry.\n\nName: ${form.get('fullName')}\nBusiness Name: ${form.get('businessName')||'Not provided'}\nPhone: ${form.get('phone')}\nEmail: ${form.get('email')||'Not provided'}\nProduct: ${form.get('product')}\nQuantity: ${form.get('quantity')}\nLocation: ${form.get('location')||'Not provided'}\n\nMessage:\n${form.get('message')||'Please share your best wholesale price.'}\n\nThank you.`;window.open(whatsappUrl(message),'_blank','noopener');status.textContent='Opening WhatsApp with your inquiry...';});

document.querySelector('#email-submit').addEventListener('click',()=>{const form=new FormData(document.querySelector('#inquiry-form'));const status=document.querySelector('#form-status');if(!String(form.get('fullName')||'').trim()){status.textContent='Please enter your name.';document.querySelector('#full-name').focus();return;}if(!String(form.get('product')||'').trim()){status.textContent='Please select a product.';document.querySelector('#product').focus();return;}window.open(gmailUrl(`Wholesale Inquiry - ${form.get('product')}`,`Hello ${BUSINESS_CONFIG.name},\n\nI am interested in purchasing honey in wholesale quantity.\n\nName: ${form.get('fullName')}\nBusiness Name: ${form.get('businessName')||''}\nPhone Number: ${form.get('phone')||''}\nEmail: ${form.get('email')||''}\nProduct: ${form.get('product')}\nQuantity: ${form.get('quantity')||''}\nLocation: ${form.get('location')||''}\n\n${form.get('message')||'Please share your wholesale pricing, minimum order quantity and delivery details.'}\n\nThank you.`),'_blank','noopener');});

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));
