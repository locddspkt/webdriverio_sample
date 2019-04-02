describe('download_file.js', () => {
    it('Download only text', async () => {
        browser.url(SAMPLE_DOWNLOAD_PAGE);
        $('a[href="img/Sample-png-image-100kb.png"]').click();
        pause(4000);

        await checkDownloadFile('SamplePNGImage');
    });
});