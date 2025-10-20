frappe.pages['react-test'].on_page_load = function (wrapper) {
	const page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'React Test',
		single_column: true,
	});

	// Determine if we're in developer mode
	const isDev =
		frappe.boot.developer_mode ||
		window.location.hostname === 'library.localhost';

	// Use Vite dev server in dev mode, static files in prod
	const src = isDev
		? "http://172.17.176.1:5173"
		: "/assets/react_integration/react-test/index.html";

	$(page.body).html(`
    <div style="width:100%;height:calc(100vh - 60px);padding:0;margin:0;">
      <iframe
        id="react-test-iframe"
        src="${src}"
        style="border:none;width:100%;height:100%;"
      ></iframe>
    </div>
  `);
};
