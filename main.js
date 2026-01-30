// Initialize Lucide icons
lucide.createIcons();

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Wait for DOM to be fully loaded before initializing
    setTimeout(() => {
        initScrollAnimations();
        initNavbarScroll();
        initFAQ();
        initScrollProgress();
        initMobileMenu();
        initPhoneInteractions();
        initPhoneScrollEffect();
        initTermsOfServiceLink();
        initPrivacyPolicyLink(); // Added privacy policy link handler
        initAPIDocumentation(); // Added API documentation functionality
    }, 100);
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Terms of Service link handler
function initTermsOfServiceLink() {
    // Find all links to Terms of Service
    const termsLinks = document.querySelectorAll('a[href="#"]');
    
    termsLinks.forEach(link => {
        if (link.textContent.toLowerCase().includes('terms of service')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'terms.html';
            });
        }
    });
}

// Privacy Policy link handler
function initPrivacyPolicyLink() {
    // Find all links to Privacy Policy
    const privacyLinks = document.querySelectorAll('a[href="#"]');
    
    privacyLinks.forEach(link => {
        if (link.textContent.toLowerCase().includes('privacy policy')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'privacy.html';
            });
        }
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target && entry.target.classList) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animation elements with null checks
    const animationElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animationElements.forEach(el => {
        if (el && el.classList) {
            observer.observe(el);
        }
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar && navbar.classList) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// FAQ functionality
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Find nearest accordion item
            const item = question.closest('.faq-item, .help-item');
            if (!item) return;

            const isActive = item.classList.contains('active');

            // Close all accordions (both types)
            document
                .querySelectorAll('.faq-item, .help-item')
                .forEach(el => el.classList.remove('active'));

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}


// Scroll progress bar
function initScrollProgress() {
    const progressBar = document.createElement('div');
    if (progressBar && progressBar.classList) {
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            if (progressBar && progressBar.style) {
                progressBar.style.width = scrollPercent + '%';
            }
        });
    }
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks && navLinks.classList) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// Form submission
function handleFormSubmit(event) {
    if (!event || !event.target) return;
    
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    const submitBtn = event.target.querySelector('button[type="submit"]');
    if (!submitBtn) return;
    
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        if (submitBtn) {
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.background = 'var(--success)';
            
            setTimeout(() => {
                if (submitBtn && event.target) {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    event.target.reset();
                }
            }, 2000);
        }
    }, 1500);
}

// Waitlist functionality
function joinWaitlist() {
    if (!event || !event.target) return;
    
    const button = event.target;
    const originalText = button.textContent;
    
    button.textContent = 'Joining...';
    button.disabled = true;
    
    setTimeout(() => {
        if (button) {
            button.textContent = 'Welcome to Sikkaa!';
            button.style.background = 'var(--success)';
            
            setTimeout(() => {
                if (button) {
                    button.textContent = originalText;
                    button.disabled = false;
                    button.style.background = '';
                }
            }, 3000);
        }
    }, 1500);
}

// Phone screen interactions
function initPhoneInteractions() {
    const actionBtns = document.querySelectorAll('.action-btn');
    const cryptoItems = document.querySelectorAll('.crypto-item');
    
    // Add click effects to action buttons
    actionBtns.forEach(btn => {
        if (btn && btn.style) {
            btn.addEventListener('click', () => {
                btn.style.transform = 'scale(0.95)';
                btn.style.background = 'rgba(84, 194, 85, 0.2)';
                
                setTimeout(() => {
                    if (btn && btn.style) {
                        btn.style.transform = '';
                        btn.style.background = '';
                    }
                }, 150);
            });
        }
    });
    
    // Add hover effects to crypto items
    cryptoItems.forEach(item => {
        if (item && item.style) {
            item.addEventListener('mouseenter', () => {
                item.style.background = 'rgba(84, 194, 85, 0.05)';
                item.style.transform = 'translateX(5px)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.background = '';
                item.style.transform = '';
            });
        }
    });
}

// Add floating animation to phone mockup on scroll
function initPhoneScrollEffect() {
    const phoneMockup = document.querySelector('.phone-mockup');
    
    if (phoneMockup && phoneMockup.style) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            phoneMockup.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Global error handler to prevent preview script errors
window.addEventListener('error', function(e) {
    console.warn('Caught error:', e.message);
    return true;
});

// API Documentation functionality
function initAPIDocumentation() {
    const apiEndpoints = document.querySelectorAll('.api-endpoint');
    
    apiEndpoints.forEach(endpoint => {
        if (endpoint && endpoint.addEventListener) {
            endpoint.addEventListener('click', (e) => {
                // Don't close when clicking on tabs or code blocks
                if (e.target.closest('.api-example')) {
                    return;
                }
                
                const existingExample = endpoint.querySelector('.api-example');
                
                if (existingExample) {
                    // Toggle existing example
                    const isVisible = existingExample.style.display !== 'none';
                    existingExample.style.display = isVisible ? 'none' : 'block';
                    endpoint.classList.toggle('active', !isVisible);
                } else {
                    // Close all other examples first
                    apiEndpoints.forEach(otherEndpoint => {
                        if (otherEndpoint !== endpoint) {
                            const otherExample = otherEndpoint.querySelector('.api-example');
                            if (otherExample) {
                                otherExample.style.display = 'none';
                                otherEndpoint.classList.remove('active');
                            }
                        }
                    });
                    
                    // Create and show example
                    const example = createAPIExample(endpoint);
                    if (example) {
                        endpoint.appendChild(example);
                        endpoint.classList.add('active');
                    }
                }
            });
        }
    });
}

function createAPIExample(endpoint) {
    const method = endpoint.querySelector('.endpoint-method')?.textContent?.trim();
    const path = endpoint.querySelector('.endpoint-path')?.textContent?.trim();
    
    if (!method || !path) return null;
    
    const exampleDiv = document.createElement('div');
    exampleDiv.className = 'api-example';
    
    // Add close button
    const closeButton = document.createElement('button');
    closeButton.className = 'api-example-close';
    closeButton.innerHTML = '<i data-lucide="x"></i>';
    closeButton.onclick = (e) => {
        e.stopPropagation();
        exampleDiv.style.display = 'none';
        endpoint.classList.remove('active');
        // Reinitialize Lucide icons for the new close button
        if (window.lucide) {
            window.lucide.createIcons();
        }
    };
    
    let exampleContent = '';
    
    // Generate examples based on endpoint
    if (path === '/api/v1/markets') {
        exampleContent = getMarketsExample();
    } else if (path.includes('/api/v1/ticker')) {
        exampleContent = getTickerExample();
    } else if (path.includes('/api/v1/orderbook')) {
        exampleContent = getOrderbookExample();
    } else if (path.includes('/api/v1/trades')) {
        exampleContent = getTradesExample();
    } else if (path === '/api/v1/account/info') {
        exampleContent = getAccountInfoExample();
    } else if (path === '/api/v1/balance') {
        exampleContent = getBalanceExample();
    } else if (path === '/api/v1/deposit/crypto') {
        exampleContent = getDepositCryptoExample();
    } else if (path === '/api/v1/deposit/history') {
        exampleContent = getDepositHistoryExample();
    } else if (path === '/api/v1/withdraw/crypto') {
        exampleContent = getWithdrawCryptoExample();
    } else if (path === '/api/v1/order') {
        exampleContent = getPlaceOrderExample();
    } else if (path.includes('/api/v1/order/status/')) {
        exampleContent = getOrderStatusExample();
    } else if (path === '/api/v1/orders/open') {
        exampleContent = getOpenOrdersExample();
    } else if (path === '/api/v1/orders/history') {
        exampleContent = getOrderHistoryExample();
    } else if (path === '/api/v1/p2p/offers') {
        exampleContent = getP2POffersExample();
    } else if (path === '/api/v1/p2p/order' && method === 'POST') {
        exampleContent = getCreateP2POrderExample();
    } else if (path.includes('/api/v1/p2p/order/status/')) {
        exampleContent = getP2POrderStatusExample();
    } else if (path.includes('/api/v1/order/')) {
        exampleContent = getCancelOrderExample();
    } else {
        exampleContent = getGenericExample(method, path);
    }
    
    exampleDiv.innerHTML = exampleContent;
    exampleDiv.prepend(closeButton);
    
    // Add copy functionality to all code blocks
    setTimeout(() => {
        const codeBlocks = exampleDiv.querySelectorAll('.code-block');
        codeBlocks.forEach(codeBlock => {
            codeBlock.addEventListener('click', () => {
                const code = codeBlock.querySelector('code');
                if (code) {
                    copyToClipboard(code.textContent);
                    showCopyFeedback(codeBlock);
                }
            });
        });
        
        // Reinitialize Lucide icons for the new close button
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }, 100);
    
    return exampleDiv;
}

function getMarketsExample() {
    return `
        <div class="example-tabs">
            <div class="tab-buttons">
                <button class="tab-btn active" onclick="showTab(event, 'curl-markets')">cURL</button>
                <button class="tab-btn" onclick="showTab(event, 'python-markets')">Python</button>
                <button class="tab-btn" onclick="showTab(event, 'js-markets')">JavaScript</button>
                <button class="tab-btn" onclick="showTab(event, 'response-markets')">Response</button>
            </div>
            
            <div id="curl-markets" class="tab-content active">
                <div class="code-block">
                    <code>curl -X GET "https://api.sikkaaexchange.com/api/v1/markets" \\
     -H "Content-Type: application/json"</code>
                </div>
            </div>
            
            <div id="python-markets" class="tab-content">
                <div class="code-block">
                    <code>import requests

url = "https://api.sikkaaexchange.com/api/v1/markets"
headers = {"Content-Type": "application/json"}

response = requests.get(url, headers=headers)
data = response.json()
print(data)</code>
                </div>
            </div>
            
            <div id="js-markets" class="tab-content">
                <div class="code-block">
                    <code>fetch('https://api.sikkaaexchange.com/api/v1/markets', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));</code>
                </div>
            </div>
            
            <div id="response-markets" class="tab-content">
                <div class="response-section">
                    <h5>Success Response (200)</h5>
                    <div class="code-block">
                        <code>{
  "success": true,
  "data": [
    {
      "symbol": "BTC/INR",
      "baseAsset": "BTC",
      "quoteAsset": "INR",
      "status": "TRADING",
      "minOrderSize": "0.001",
      "maxOrderSize": "100",
      "tickSize": "1"
    },
    {
      "symbol": "ETH/INR",
      "baseAsset": "ETH",
      "quoteAsset": "INR",
      "status": "TRADING",
      "minOrderSize": "0.01",
      "maxOrderSize": "1000",
      "tickSize": "1"
    }
  ]
}</code>
                    </div>
                    <h5>Error Response (400)</h5>
                    <div class="code-block">
                        <code>{
  "success": false,
  "error": {
    "code": 400,
    "message": "Bad Request",
    "details": "Invalid request parameters"
  }
}</code>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getTickerExample() {
    return `
        <div class="example-tabs">
            <div class="tab-buttons">
                <button class="tab-btn active" onclick="showTab(event, 'curl-ticker')">cURL</button>
                <button class="tab-btn" onclick="showTab(event, 'python-ticker')">Python</button>
                <button class="tab-btn" onclick="showTab(event, 'js-ticker')">JavaScript</button>
                <button class="tab-btn" onclick="showTab(event, 'response-ticker')">Response</button>
            </div>
            
            <div id="curl-ticker" class="tab-content active">
                <div class="code-block">
                    <code>curl -X GET "https://api.sikkaaexchange.com/api/v1/ticker?symbol=BTC/INR" \\
     -H "Content-Type: application/json"</code>
                </div>
            </div>
            
            <div id="python-ticker" class="tab-content">
                <div class="code-block">
                    <code>import requests

url = "https://api.sikkaaexchange.com/api/v1/ticker"
params = {"symbol": "BTC/INR"}
headers = {"Content-Type": "application/json"}

response = requests.get(url, params=params, headers=headers)
data = response.json()
print(data)</code>
                </div>
            </div>
            
            <div id="js-ticker" class="tab-content">
                <div class="code-block">
                    <code>const symbol = 'BTC/INR';
fetch(\`https://api.sikkaaexchange.com/api/v1/ticker?symbol=\${symbol}\`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));</code>
                </div>
            </div>
            
            <div id="response-ticker" class="tab-content">
                <div class="response-section">
                    <h5>Success Response (200)</h5>
                    <div class="code-block">
                        <code>{
  "success": true,
  "data": {
    "symbol": "BTC/INR",
    "price": "4200000",
    "priceChange": "105000",
    "priceChangePercent": "2.56",
    "high": "4250000",
    "low": "4100000",
    "volume": "125.45",
    "quoteVolume": "527390000",
    "openTime": 1640995200000,
    "closeTime": 1641081600000
  }
}</code>
                    </div>
                    <h5>Error Response (404)</h5>
                    <div class="code-block">
                        <code>{
  "success": false,
  "error": {
    "code": 404,
    "message": "Symbol not found",
    "details": "Trading pair BTC/INR does not exist"
  }
}</code>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getPlaceOrderExample() {
    return `
        <div class="example-tabs">
            <div class="tab-buttons">
                <button class="tab-btn active" onclick="showTab(event, 'curl-order')">cURL</button>
                <button class="tab-btn" onclick="showTab(event, 'python-order')">Python</button>
                <button class="tab-btn" onclick="showTab(event, 'js-order')">JavaScript</button>
                <button class="tab-btn" onclick="showTab(event, 'response-order')">Response</button>
            </div>
            
            <div id="curl-order" class="tab-content active">
                <div class="code-block">
                    <code>curl -X POST "https://api.sikkaaexchange.com/api/v1/order" \\
     -H "Content-Type: application/json" \\
     -H "X-API-Key: your_api_key" \\
     -H "X-API-Secret: your_api_secret" \\
     -H "X-Timestamp: 1640995200000" \\
     -H "X-Signature: hmac_signature" \\
     -d '{
       "symbol": "BTC/INR",
       "side": "buy",
       "type": "limit",
       "quantity": "0.001",
       "price": "4200000"
     }'</code>
                </div>
            </div>
            
            <div id="python-order" class="tab-content">
                <div class="code-block">
                    <code>import requests
import hmac
import hashlib
import time

api_key = "your_api_key"
api_secret = "your_api_secret"
timestamp = str(int(time.time() * 1000))

# Create signature
message = timestamp + "POST" + "/api/v1/order" + '{"symbol":"BTC/INR","side":"buy","type":"limit","quantity":"0.001","price":"4200000"}'
signature = hmac.new(api_secret.encode(), message.encode(), hashlib.sha256).hexdigest()

url = "https://api.sikkaaexchange.com/api/v1/order"
headers = {
    "Content-Type": "application/json",
    "X-API-Key": api_key,
    "X-Timestamp": timestamp,
    "X-Signature": signature
}
data = {
    "symbol": "BTC/INR",
    "side": "buy",
    "type": "limit",
    "quantity": "0.001",
    "price": "4200000"
}

response = requests.post(url, json=data, headers=headers)
print(response.json())</code>
                </div>
            </div>
            
            <div id="js-order" class="tab-content">
                <div class="code-block">
                    <code>const crypto = require('crypto');

const apiKey = 'your_api_key';
const apiSecret = 'your_api_secret';
const timestamp = Date.now().toString();
const body = JSON.stringify({
  symbol: 'BTC/INR',
  side: 'buy',
  type: 'limit',
  quantity: '0.001',
  price: '4200000'
});

// Create signature
const message = timestamp + 'POST' + '/api/v1/order' + body;
const signature = crypto.createHmac('sha256', apiSecret).update(message).digest('hex');

fetch('https://api.sikkaaexchange.com/api/v1/order', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': apiKey,
    'X-Timestamp': timestamp,
    'X-Signature': signature
  },
  body: body
})
.then(response => response.json())
.then(data => console.log(data));</code>
                </div>
            </div>
            
            <div id="response-order" class="tab-content">
                <div class="response-section">
                    <h5>Success Response (201)</h5>
                    <div class="code-block">
                        <code>{
  "success": true,
  "data": {
    "orderId": "12345678",
    "symbol": "BTC/INR",
    "side": "buy",
    "type": "limit",
    "quantity": "0.001",
    "price": "4200000",
    "status": "NEW",
    "timeInForce": "GTC",
    "createdAt": 1640995200000
  }
}</code>
                    </div>
                    <h5>Error Response (400)</h5>
                    <div class="code-block">
                        <code>{
  "success": false,
  "error": {
    "code": 1003,
    "message": "Insufficient balance",
    "details": "Not enough INR balance to place this order"
  }
}</code>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getOrderbookExample() {
    return `
        <div class="example-tabs">
            <div class="tab-buttons">
                <button class="tab-btn active" onclick="showTab(event, 'curl-orderbook')">cURL</button>
                <button class="tab-btn" onclick="showTab(event, 'python-orderbook')">Python</button>
                <button class="tab-btn" onclick="showTab(event, 'js-orderbook')">JavaScript</button>
                <button class="tab-btn" onclick="showTab(event, 'response-orderbook')">Response</button>
            </div>
            
            <div id="curl-orderbook" class="tab-content active">
                <div class="code-block">
                    <code>curl -X GET "https://api.sikkaaexchange.com/api/v1/orderbook?symbol=BTC/INR&limit=50" \\
     -H "Content-Type: application/json"</code>
                </div>
            </div>
            
            <div id="python-orderbook" class="tab-content">
                <div class="code-block">
                    <code>import requests

url = "https://api.sikkaaexchange.com/api/v1/orderbook"
params = {"symbol": "BTC/INR", "limit": 50}
headers = {"Content-Type": "application/json"}

response = requests.get(url, params=params, headers=headers)
data = response.json()
print(data)</code>
                </div>
            </div>
            
            <div id="js-orderbook" class="tab-content">
                <div class="code-block">
                    <code>const symbol = 'BTC/INR';
const limit = 50;
fetch(\`https://api.sikkaaexchange.com/api/v1/orderbook?symbol=\${symbol}&limit=\${limit}\`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));</code>
                </div>
            </div>
            
            <div id="response-orderbook" class="tab-content">
                <div class="response-section">
                    <h5>Success Response (200)</h5>
                    <div class="code-block">
                        <code>{
  "success": true,
  "data": {
    "symbol": "BTC/INR",
    "bids": [
      ["4200000", "0.5"],
      ["4199000", "1.2"],
      ["4198000", "0.8"]
    ],
    "asks": [
      ["4201000", "0.3"],
      ["4202000", "0.7"],
      ["4203000", "1.1"]
    ],
    "timestamp": 1640995200000
  }
}</code>
                    </div>
                    <h5>Error Response (400)</h5>
                    <div class="code-block">
                        <code>{
  "success": false,
  "error": {
    "code": 400,
    "message": "Invalid symbol",
    "details": "Symbol BTC/INR not found"
  }
}</code>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getTradesExample() {
    return `
        <div class="example-tabs">
            <div class="tab-buttons">
                <button class="tab-btn active" onclick="showTab(event, 'curl-trades')">cURL</button>
                <button class="tab-btn" onclick="showTab(event, 'python-trades')">Python</button>
                <button class="tab-btn" onclick="showTab(event, 'js-trades')">JavaScript</button>
                <button class="tab-btn" onclick="showTab(event, 'response-trades')">Response</button>
            </div>
            
            <div id="curl-trades" class="tab-content active">
                <div class="code-block">
                    <code>curl -X GET "https://api.sikkaaexchange.com/api/v1/trades?symbol=BTC/INR&limit=100" \\
     -H "Content-Type: application/json"</code>
                </div>
            </div>
            
            <div id="python-trades" class="tab-content">
                <div class="code-block">
                    <code>import requests

url = "https://api.sikkaaexchange.com/api/v1/trades"
params = {"symbol": "BTC/INR", "limit": 100}
headers = {"Content-Type": "application/json"}

response = requests.get(url, params=params, headers=headers)
data = response.json()
print(data)</code>
                </div>
            </div>
            
            <div id="js-trades" class="tab-content">
                <div class="code-block">
                    <code>const symbol = 'BTC/INR';
const limit = 100;
fetch(\`https://api.sikkaaexchange.com/api/v1/trades?symbol=\${symbol}&limit=\${limit}\`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));</code>
                </div>
            </div>
            
            <div id="response-trades" class="tab-content">
                <div class="response-section">
                    <h5>Success Response (200)</h5>
                    <div class="code-block">
                        <code>{
  "success": true,
  "data": [
    {
      "id": "12345",
      "price": "4200000",
      "quantity": "0.001",
      "side": "buy",
      "timestamp": 1640995200000
    },
    {
      "id": "12346",
      "price": "4199500",
      "quantity": "0.005",
      "side": "sell",
      "timestamp": 1640995180000
    }
  ]
}</code>
                    </div>
                    <h5>Error Response (404)</h5>
                    <div class="code-block">
                        <code>{
  "success": false,
  "error": {
    "code": 404,
    "message": "No trades found",
    "details": "No recent trades for symbol BTC/INR"
  }
}</code>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getAccountInfoExample() {
    return `
        <div class="example-tabs">
            <div class="tab-buttons">
                <button class="tab-btn active" onclick="showTab(event, 'curl-account')">cURL</button>
                <button class="tab-btn" onclick="showTab(event, 'python-account')">Python</button>
                <button class="tab-btn" onclick="showTab(event, 'js-account')">JavaScript</button>
                <button class="tab-btn" onclick="showTab(event, 'response-account')">Response</button>
            </div>
            
            <div id="curl-account" class="tab-content active">
                <div class="code-block">
                    <code>curl -X GET "https://api.sikkaaexchange.com/api/v1/account/info" \\
     -H "Content-Type: application/json" \\
     -H "X-API-Key: your_api_key" \\
     -H "X-Timestamp: 1640995200000" \\
     -H "X-Signature: hmac_signature"</code>
                </div>
            </div>
            
            <div id="python-account" class="tab-content">
                <div class="code-block">
                    <code>import requests
import hmac
import hashlib
import time

api_key = "your_api_key"
api_secret = "your_api_secret"
timestamp = str(int(time.time() * 1000))

# Create signature
message = timestamp + "GET" + "/api/v1/account/info"
signature = hmac.new(api_secret.encode(), message.encode(), hashlib.sha256).hexdigest()

url = "https://api.sikkaaexchange.com/api/v1/account/info"
headers = {
    "Content-Type": "application/json",
    "X-API-Key": api_key,
    "X-Timestamp": timestamp,
    "X-Signature": signature
}

response = requests.get(url, headers=headers)
print(response.json())</code>
                </div>
            </div>
            
            <div id="js-account" class="tab-content">
                <div class="code-block">
                    <code>const crypto = require('crypto');

const apiKey = 'your_api_key';
const apiSecret = 'your_api_secret';
const timestamp = Date.now().toString();

// Create signature
const message = timestamp + 'GET' + '/api/v1/account/info';
const signature = crypto.createHmac('sha256', apiSecret).update(message).digest('hex');

fetch('https://api.sikkaaexchange.com/api/v1/account/info', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': apiKey,
    'X-Timestamp': timestamp,
    'X-Signature': signature
  }
})
.then(response => response.json())
.then(data => console.log(data));</code>
                </div>
            </div>
            
            <div id="response-account" class="tab-content">
                <div class="response-section">
                    <h5>Success Response (200)</h5>
                    <div class="code-block">
                        <code>{
  "success": true,
  "data": {
    "userId": "12345",
    "email": "user@example.com",
    "kycStatus": "verified",
    "accountType": "individual",
    "createdAt": 1640995200000,
    "permissions": ["trade", "withdraw"]
  }
}</code>
                    </div>
                    <h5>Error Response (401)</h5>
                    <div class="code-block">
                        <code>{
  "success": false,
  "error": {
    "code": 401,
    "message": "Unauthorized",
    "details": "Invalid API key or signature"
  }
}</code>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getBalanceExample() {
    return `
        <div class="example-tabs">
            <div class="tab-buttons">
                <button class="tab-btn active" onclick="showTab(event, 'curl-balance')">cURL</button>
                <button class="tab-btn" onclick="showTab(event, 'python-balance')">Python</button>
                <button class="tab-btn" onclick="showTab(event, 'js-balance')">JavaScript</button>
                <button class="tab-btn" onclick="showTab(event, 'response-balance')">Response</button>
            </div>
            
            <div id="curl-balance" class="tab-content active">
                <div class="code-block">
                    <code>curl -X GET "https://api.sikkaaexchange.com/api/v1/balance" \\
     -H "Content-Type: application/json" \\
     -H "X-API-Key: your_api_key" \\
     -H "X-Timestamp: 1640995200000" \\
     -H "X-Signature: hmac_signature"</code>
                </div>
            </div>
            
            <div id="python-balance" class="tab-content">
                <div class="code-block">
                    <code>import requests
import hmac
import hashlib
import time

api_key = "your_api_key"
api_secret = "your_api_secret"
timestamp = str(int(time.time() * 1000))

# Create signature
message = timestamp + "GET" + "/api/v1/balance"
signature = hmac.new(api_secret.encode(), message.encode(), hashlib.sha256).hexdigest()

url = "https://api.sikkaaexchange.com/api/v1/balance"
headers = {
    "Content-Type": "application/json",
    "X-API-Key": api_key,
    "X-Timestamp": timestamp,
    "X-Signature": signature
}

response = requests.get(url, headers=headers)
print(response.json())</code>
                </div>
            </div>
            
            <div id="js-balance" class="tab-content">
                <div class="code-block">
                    <code>const crypto = require('crypto');

const apiKey = 'your_api_key';
const apiSecret = 'your_api_secret';
const timestamp = Date.now().toString();

// Create signature
const message = timestamp + 'GET' + '/api/v1/balance';
const signature = crypto.createHmac('sha256', apiSecret).update(message).digest('hex');

fetch('https://api.sikkaaexchange.com/api/v1/balance', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': apiKey,
    'X-Timestamp': timestamp,
    'X-Signature': signature
  }
})
.then(response => response.json())
.then(data => console.log(data));</code>
                </div>
            </div>
            
            <div id="response-balance" class="tab-content">
                <div class="response-section">
                    <h5>Success Response (200)</h5>
                    <div class="code-block">
                        <code>{
  "success": true,
  "data": {
    "balances": [
      {
        "asset": "INR",
        "available": "50000.00",
        "locked": "5000.00"
      },
      {
        "asset": "BTC",
        "available": "0.12345678",
        "locked": "0.00100000"
      },
      {
        "asset": "ETH",
        "available": "2.50000000",
        "locked": "0.00000000"
      }
    ]
  }
}</code>
                    </div>
                    <h5>Error Response (401)</h5>
                    <div class="code-block">
                        <code>{
  "success": false,
  "error": {
    "code": 401,
    "message": "Unauthorized",
    "details": "Invalid API credentials"
  }
}</code>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getDepositCryptoExample() {
    return `
        <div class="example-tabs">
            <div class="tab-buttons">
                <button class="tab-btn active" onclick="showTab(event, 'curl-deposit')">cURL</button>
                <button class="tab-btn" onclick="showTab(event, 'python-deposit')">Python</button>
                <button class="tab-btn" onclick="showTab(event, 'js-deposit')">JavaScript</button>
                <button class="tab-btn" onclick="showTab(event, 'response-deposit')">Response</button>
            </div>
            
            <div id="curl-deposit" class="tab-content active">
                <div class="code-block">
                    <code>curl -X POST "https://api.sikkaaexchange.com/api/v1/deposit/crypto" \\
     -H "Content-Type: application/json" \\
     -H "X-API-Key: your_api_key" \\
     -H "X-Timestamp: 1640995200000" \\
     -H "X-Signature: hmac_signature" \\
     -d '{
       "asset": "BTC",
       "network": "bitcoin"
     }'</code>
                </div>
            </div>
            
            <div id="python-deposit" class="tab-content">
                <div class="code-block">
                    <code>import requests
import hmac
import hashlib
import time

api_key = "your_api_key"
api_secret = "your_api_secret"
timestamp = str(int(time.time() * 1000))

data = {
    "asset": "BTC",
    "network": "bitcoin"
}

# Create signature
message = timestamp + "POST" + "/api/v1/deposit/crypto" + json.dumps(data, separators=(',', ':'))
signature = hmac.new(api_secret.encode(), message.encode(), hashlib.sha256).hexdigest()

url = "https://api.sikkaaexchange.com/api/v1/deposit/crypto"
headers = {
    "Content-Type": "application/json",
    "X-API-Key": api_key,
    "X-Timestamp": timestamp,
    "X-Signature": signature
}

response = requests.post(url, json=data, headers=headers)
print(response.json())</code>
                </div>
            </div>
            
            <div id="js-deposit" class="tab-content">
                <div class="code-block">
                    <code>const crypto = require('crypto');

const apiKey = 'your_api_key';
const apiSecret = 'your_api_secret';
const timestamp = Date.now().toString();
const body = JSON.stringify({
  asset: 'BTC',
  network: 'bitcoin'
});

// Create signature
const message = timestamp + 'POST' + '/api/v1/deposit/crypto' + body;
const signature = crypto.createHmac('sha256', apiSecret).update(message).digest('hex');

fetch('https://api.sikkaaexchange.com/api/v1/deposit/crypto', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': apiKey,
    'X-Timestamp': timestamp,
    'X-Signature': signature
  },
  body: body
})
.then(response => response.json())
.then(data => console.log(data));</code>
                </div>
            </div>
            
            <div id="response-deposit" class="tab-content">
                <div class="response-section">
                    <h5>Success Response (200)</h5>
                    <div class="code-block">
                        <code>{
  "success": true,
  "data": {
    "asset": "BTC",
    "network": "bitcoin",
    "address": "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    "tag": null,
    "url": "bitcoin:bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
  }
}</code>
                    </div>
                    <h5>Error Response (400)</h5>
                    <div class="code-block">
                        <code>{
  "success": false,
  "error": {
    "code": 400,
    "message": "Invalid asset",
    "details": "Asset BTC is not supported for deposits"
  }
}</code>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getWithdrawCryptoExample() {
    return `
        <div class="example-tabs">
            <div class="tab-buttons">
                <button class="tab-btn active" onclick="showTab(event, 'curl-withdraw')">cURL</button>
                <button class="tab-btn" onclick="showTab(event, 'python-withdraw')">Python</button>
                <button class="tab-btn" onclick="showTab(event, 'js-withdraw')">JavaScript</button>
                <button class="tab-btn" onclick="showTab(event, 'response-withdraw')">Response</button>
            </div>
            
            <div id="curl-withdraw" class="tab-content active">
                <div class="code-block">
                    <code>curl -X POST "https://api.sikkaaexchange.com/api/v1/withdraw/crypto" \\
     -H "Content-Type: application/json" \\
     -H "X-API-Key: your_api_key" \\
     -H "X-Timestamp: 1640995200000" \\
     -H "X-Signature: hmac_signature" \\
     -d '{
       "asset": "BTC",
       "amount": "0.001",
       "address": "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
       "network": "bitcoin"
     }'</code>
                </div>
            </div>
            
            <div id="python-withdraw" class="tab-content">
                <div class="code-block">
                    <code>import requests
import hmac
import hashlib
import time
import json

api_key = "your_api_key"
api_secret = "your_api_secret"
timestamp = str(int(time.time() * 1000))

data = {
    "asset": "BTC",
    "amount": "0.001",
    "address": "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    "network": "bitcoin"
}

# Create signature
message = timestamp + "POST" + "/api/v1/withdraw/crypto" + json.dumps(data, separators=(',', ':'))
signature = hmac.new(api_secret.encode(), message.encode(), hashlib.sha256).hexdigest()

url = "https://api.sikkaaexchange.com/api/v1/withdraw/crypto"
headers = {
    "Content-Type": "application/json",
    "X-API-Key": api_key,
    "X-Timestamp": timestamp,
    "X-Signature": signature
}

response = requests.post(url, json=data, headers=headers)
print(response.json())</code>
                </div>
            </div>
            
            <div id="js-withdraw" class="tab-content">
                <div class="code-block">
                    <code>const crypto = require('crypto');

const apiKey = 'your_api_key';
const apiSecret = 'your_api_secret';
const timestamp = Date.now().toString();
const body = JSON.stringify({
  asset: 'BTC',
  amount: '0.001',
  address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
  network: 'bitcoin'
});

// Create signature
const message = timestamp + 'POST' + '/api/v1/withdraw/crypto' + body;
const signature = crypto.createHmac('sha256', apiSecret).update(message).digest('hex');

fetch('https://api.sikkaaexchange.com/api/v1/withdraw/crypto', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': apiKey,
    'X-Timestamp': timestamp,
    'X-Signature': signature
  },
  body: body
})
.then(response => response.json())
.then(data => console.log(data));</code>
                </div>
            </div>
            
            <div id="response-withdraw" class="tab-content">
                <div class="response-section">
                    <h5>Success Response (200)</h5>
                    <div class="code-block">
                        <code>{
  "success": true,
  "data": {
    "withdrawId": "withdraw_123456",
    "asset": "BTC",
    "amount": "0.001",
    "fee": "0.0005",
    "address": "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    "network": "bitcoin",
    "status": "pending",
    "createdAt": 1640995200000
  }
}</code>
                    </div>
                    <h5>Error Response (400)</h5>
                    <div class="code-block">
                        <code>{
  "success": false,
  "error": {
    "code": 1004,
    "message": "Insufficient balance",
    "details": "Not enough BTC balance for withdrawal"
  }
}</code>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getCreateP2POrderExample() {
    return `
        <div class="example-tabs">
            <div class="tab-buttons">
                <button class="tab-btn active" onclick="showTab(event, 'curl-p2p-create')">cURL</button>
                <button class="tab-btn" onclick="showTab(event, 'python-p2p-create')">Python</button>
                <button class="tab-btn" onclick="showTab(event, 'js-p2p-create')">JavaScript</button>
                <button class="tab-btn" onclick="showTab(event, 'response-p2p-create')">Response</button>
            </div>
            
            <div id="curl-p2p-create" class="tab-content active">
                <div class="code-block">
                    <code>curl -X POST "https://api.sikkaaexchange.com/api/v1/p2p/order" \\
     -H "Content-Type: application/json" \\
     -H "X-API-Key: your_api_key" \\
     -H "X-Timestamp: 1640995200000" \\
     -H "X-Signature: hmac_signature" \\
     -d '{
       "offerId": "offer_123456",
       "amount": "5000",
       "paymentMethod": "UPI"
     }'</code>
                </div>
            </div>
            
            <div id="python-p2p-create" class="tab-content">
                <div class="code-block">
                    <code>import requests
import hmac
import hashlib
import time
import json

api_key = "your_api_key"
api_secret = "your_api_secret"
timestamp = str(int(time.time() * 1000))

data = {
    "offerId": "offer_123456",
    "amount": "5000",
    "paymentMethod": "UPI"
}

# Create signature
message = timestamp + "POST" + "/api/v1/p2p/order" + json.dumps(data, separators=(',', ':'))
signature = hmac.new(api_secret.encode(), message.encode(), hashlib.sha256).hexdigest()

url = "https://api.sikkaaexchange.com/api/v1/p2p/order"
headers = {
    "Content-Type": "application/json",
    "X-API-Key": api_key,
    "X-Timestamp": timestamp,
    "X-Signature": signature
}

response = requests.post(url, json=data, headers=headers)
print(response.json())</code>
                </div>
            </div>
            
            <div id="js-p2p-create" class="tab-content">
                <div class="code-block">
                    <code>const crypto = require('crypto');

const apiKey = 'your_api_key';
const apiSecret = 'your_api_secret';
const timestamp = Date.now().toString();
const body = JSON.stringify({
  offerId: 'offer_123456',
  amount: '5000',
  paymentMethod: 'UPI'
});

// Create signature
const message = timestamp + 'POST' + '/api/v1/p2p/order' + body;
const signature = crypto.createHmac('sha256', apiSecret).update(message).digest('hex');

fetch('https://api.sikkaaexchange.com/api/v1/p2p/order', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': apiKey,
    'X-Timestamp': timestamp,
    'X-Signature': signature
  },
  body: body
})
.then(response => response.json())
.then(data => console.log(data));</code>
                </div>
            </div>
            
            <div id="response-p2p-create" class="tab-content">
                <div class="response-section">
                    <h5>Success Response (201)</h5>
                    <div class="code-block">
                        <code>{
  "success": true,
  "data": {
    "orderId": "p2p_order_789123",
    "offerId": "offer_123456",
    "amount": "5000",
    "cryptoAmount": "0.00119048",
    "paymentMethod": "UPI",
    "status": "pending_payment",
    "expiresAt": 1641001200000,
    "createdAt": 1640995200000
  }
}</code>
                    </div>
                    <h5>Error Response (400)</h5>
                    <div class="code-block">
                        <code>{
  "success": false,
  "error": {
    "code": 400,
    "message": "Invalid offer",
    "details": "Offer offer_123456 is no longer available"
  }
}</code>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getDepositHistoryExample() {
    return `
        <div class="example-tabs">
            <div class="tab-buttons">
                <button class="tab-btn active" onclick="showTab(event, 'curl-deposit-history')">cURL</button>
                <button class="tab-btn" onclick="showTab(event, 'python-deposit-history')">Python</button>
                <button class="tab-btn" onclick="showTab(event, 'js-deposit-history')">JavaScript</button>
                <button class="tab-btn" onclick="showTab(event, 'response-deposit-history')">Response</button>
            </div>
            
            <div id="curl-deposit-history" class="tab-content active">
                <div class="code-block">
                    <code>curl -X GET "https://api.sikkaaexchange.com/api/v1/deposit/history?limit=50" \\
     -H "Content-Type: application/json" \\
     -H "X-API-Key: your_api_key" \\
     -H "X-Timestamp: 1640995200000" \\
     -H "X-Signature: hmac_signature"</code>
                </div>
            </div>
            
            <div id="python-deposit-history" class="tab-content">
                <div class="code-block">
                    <code>import requests
import hmac
import hashlib
import time

api_key = "your_api_key"
api_secret = "your_api_secret"
timestamp = str(int(time.time() * 1000))

# Create signature
message = timestamp + "GET" + "/api/v1/deposit/history?limit=50"
signature = hmac.new(api_secret.encode(), message.encode(), hashlib.sha256).hexdigest()

url = "https://api.sikkaaexchange.com/api/v1/deposit/history"
params = {"limit": 50}
headers = {
    "Content-Type": "application/json",
    "X-API-Key": api_key,
    "X-Timestamp": timestamp,
    "X-Signature": signature
}

response = requests.get(url, params=params, headers=headers)
print(response.json())</code>
                </div>
            </div>
            
            <div id="js-deposit-history" class="tab-content">
                <div class="code-block">
                    <code>const crypto = require('crypto');

const apiKey = 'your_api_key';
const apiSecret = 'your_api_secret';
const timestamp = Date.now().toString();

// Create signature
const message = timestamp + 'GET' + '/api/v1/deposit/history?limit=50';
const signature = crypto.createHmac('sha256', apiSecret).update(message).digest('hex');

fetch('https://api.sikkaaexchange.com/api/v1/deposit/history?limit=50', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': apiKey,
    'X-Timestamp': timestamp,
    'X-Signature': signature
  }
})
.then(response => response.json())
.then(data => console.log(data));</code>
                </div>
            </div>
            
            <div id="response-deposit-history" class="tab-content">
                <div class="response-section">
                    <h5>Success Response (200)</h5>
                    <div class="code-block">
                        <code>{
  "success": true,
  "data": [
    {
      "depositId": "dep_123456",
      "asset": "BTC",
      "amount": "0.001",
      "network": "bitcoin",
      "address": "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      "txHash": "a1b2c3d4e5f6...",
      "status": "completed",
      "confirmations": 6,
      "createdAt": 1640995200000
    }
  ]
}</code>
                    </div>
                    <h5>Error Response (401)</h5>
                    <div class="code-block">
                        <code>{
  "success": false,
  "error": {
    "code": 401,
    "message": "Unauthorized",
    "details": "Invalid API credentials"
  }
}</code>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getCancelOrderExample() {
    return `
        <div class="example-tabs">
            <div class="tab-buttons">
                <button class="tab-btn active" onclick="showTab(event, 'curl-cancel')">cURL</button>
                <button class="tab-btn" onclick="showTab(event, 'python-cancel')">Python</button>
                <button class="tab-btn" onclick="showTab(event, 'js-cancel')">JavaScript</button>
                <button class="tab-btn" onclick="showTab(event, 'response-cancel')">Response</button>
            </div>
            
            <div id="curl-cancel" class="tab-content active">
                <div class="code-block">
                    <code>curl -X DELETE "https://api.sikkaaexchange.com/api/v1/order/12345678" \\
     -H "Content-Type: application/json" \\
     -H "X-API-Key: your_api_key" \\
     -H "X-Timestamp: 1640995200000" \\
     -H "X-Signature: hmac_signature"</code>
                </div>
            </div>
            
            <div id="python-cancel" class="tab-content">
                <div class="code-block">
                    <code>import requests
import hmac
import hashlib
import time

api_key = "your_api_key"
api_secret = "your_api_secret"
timestamp = str(int(time.time() * 1000))
order_id = "12345678"

# Create signature
message = timestamp + "DELETE" + f"/api/v1/order/{order_id}"
signature = hmac.new(api_secret.encode(), message.encode(), hashlib.sha256).hexdigest()

url = f"https://api.sikkaaexchange.com/api/v1/order/{order_id}"
headers = {
    "Content-Type": "application/json",
    "X-API-Key": api_key,
    "X-Timestamp": timestamp,
    "X-Signature": signature
}

response = requests.delete(url, headers=headers)
print(response.json())</code>
                </div>
            </div>
            
            <div id="js-cancel" class="tab-content">
                <div class="code-block">
                    <code>const crypto = require('crypto');

const apiKey = 'your_api_key';
const apiSecret = 'your_api_secret';
const timestamp = Date.now().toString();
const orderId = '12345678';

// Create signature
const message = timestamp + 'DELETE' + \`/api/v1/order/\${orderId}\`;
const signature = crypto.createHmac('sha256', apiSecret).update(message).digest('hex');

fetch(\`https://api.sikkaaexchange.com/api/v1/order/\${orderId}\`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': apiKey,
    'X-Timestamp': timestamp,
    'X-Signature': signature
  }
})
.then(response => response.json())
.then(data => console.log(data));</code>
                </div>
            </div>
            
            <div id="response-cancel" class="tab-content">
                <div class="response-section">
                    <h5>Success Response (200)</h5>
                    <div class="code-block">
                        <code>{
  "success": true,
  "data": {
    "orderId": "12345678",
    "status": "CANCELLED",
    "cancelledAt": 1640995200000
  }
}</code>
                    </div>
                    <h5>Error Response (404)</h5>
                    <div class="code-block">
                        <code>{
  "success": false,
  "error": {
    "code": 404,
    "message": "Order not found",
    "details": "Order ID 12345678 does not exist"
  }
}</code>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getGenericExample(method, path) {
    return `
        <div class="example-tabs">
            <div class="tab-buttons">
                <button class="tab-btn active" onclick="showTab(event, 'curl-generic')">cURL</button>
                <button class="tab-btn" onclick="showTab(event, 'response-generic')">Response</button>
            </div>
            
            <div id="curl-generic" class="tab-content active">
                <div class="code-block">
                    <code>curl -X ${method} "https://api.sikkaaexchange.com${path}" \\
     -H "Content-Type: application/json" \\
     -H "X-API-Key: your_api_key" \\
     -H "X-Timestamp: 1640995200000" \\
     -H "X-Signature: hmac_signature"</code>
                </div>
            </div>
            
            <div id="response-generic" class="tab-content">
                <div class="response-section">
                    <h5>Success Response (200)</h5>
                    <div class="code-block">
                        <code>{
  "success": true,
  "data": {
    // Response data here
  }
}</code>
                    </div>
                    <h5>Error Response (401)</h5>
                    <div class="code-block">
                        <code>{
  "success": false,
  "error": {
    "code": 401,
    "message": "Unauthorized",
    "details": "Invalid API credentials"
  }
}</code>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Tab switching functionality
function showTab(event, tabId) {
    const tabContent = event.target.closest('.example-tabs');
    if (!tabContent) return;
    
    // Hide all tab contents
    const contents = tabContent.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // Remove active class from all buttons
    const buttons = tabContent.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab and mark button as active
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
        event.target.classList.add('active');
    }
}

// Copy to clipboard functionality
function copyToClipboard(text) {
    // Clean up the text by removing extra whitespace and HTML entities
    const cleanText = text
        .replace(/&nbsp;/g, ' ')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .trim();
    
    if (navigator.clipboard && window.isSecureContext) {
        // Use modern clipboard API
        navigator.clipboard.writeText(cleanText).then(() => {
            console.log('Code copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy: ', err);
            fallbackCopyTextToClipboard(cleanText);
        });
    } else {
        // Fallback for older browsers
        fallbackCopyTextToClipboard(cleanText);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        console.log('Code copied to clipboard (fallback)');
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }
    
    document.body.removeChild(textArea);
}

function showCopyFeedback(codeBlock) {
    // Change the hover text temporarily
    const originalContent = codeBlock.getAttribute('data-copy-text') || 'Click to copy';
    codeBlock.setAttribute('data-copy-text', 'Copied!');
    
    // Add a temporary copied class for styling
    codeBlock.classList.add('copied');
    
    // Reset after 2 seconds
    setTimeout(() => {
        codeBlock.setAttribute('data-copy-text', originalContent);
        codeBlock.classList.remove('copied');
    }, 2000);
}

// Ensure all functions are available globally
window.handleFormSubmit = handleFormSubmit;
window.joinWaitlist = joinWaitlist;
window.showTab = showTab;
window.copyToClipboard = copyToClipboard;
