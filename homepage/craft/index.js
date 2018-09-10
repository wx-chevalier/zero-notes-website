navigator.serviceWorker.register('./service-worker.js', { scope: './' });

new Worker('./src/service/worker/worker.js');
