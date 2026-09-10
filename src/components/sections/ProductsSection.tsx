import React, { useState } from 'react';
import { 
  Download, 
  QrCode, 
  ShieldCheck, 
  Smartphone, 
  CheckCircle2, 
  Copy, 
  Check, 
  AlertCircle, 
  Info, 
  Cpu, 
  HelpCircle, 
  FileCode, 
  ChevronRight,
  ExternalLink,
  MessageSquare,
  Sparkles,
  ArrowLeft,
  RefreshCw,
  Share2,
  Globe
} from 'lucide-react';
import { PRODUCTS, APK_INSTALL_GUIDE_STEPS, APK_SECURITY_INFO, COMPANY_DETAILS } from '../../data/siteData';
import { ProductItem } from '../../types';

interface ProductsSectionProps {
  onBackToHome?: () => void;
  onOpenEstimator?: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onBackToHome, onOpenEstimator }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem>(PRODUCTS[0]);
  const [activeStepTab, setActiveStepTab] = useState<number>(1);
  const [copiedHash, setCopiedHash] = useState<string | null>(null);
  const [showQrModal, setShowQrModal] = useState<boolean>(false);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleCopyHash = (hash: string) => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(hash);
    setTimeout(() => setCopiedHash(null), 2500);
  };

  const handleDownloadApk = (product: ProductItem) => {
    if (product.productType === 'web' && product.externalUrl) {
      window.open(product.externalUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    if (!product.downloadFilename) return;

    setDownloadingId(product.id);
    const downloadLink = document.createElement('a');
    downloadLink.href = `/downloads/${product.downloadFilename}`;
    downloadLink.download = product.downloadFilename;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    setTimeout(() => {
      setDownloadingId(null);
      setDownloadSuccess(product.name);
      setTimeout(() => setDownloadSuccess(null), 4000);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen pt-24 pb-20 bg-slate-50/50 text-slate-900 overflow-hidden">
      {/* Background Subtle Geometry */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-slate-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb & Return Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs font-mono">
            {onBackToHome && (
              <button
                type="button"
                onClick={onBackToHome}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 shadow-2xs transition-all font-semibold"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Home</span>
              </button>
            )}
            <span className="text-slate-400">/</span>
            <span className="text-slate-500">CoreX IT Solutions</span>
            <span className="text-slate-400">/</span>
            <span className="text-blue-700 font-semibold">Software & APK Hub</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono font-semibold text-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              3 Production Ready Tools
            </span>
          </div>
        </div>

        {/* Hero Banner Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-3">
              <Smartphone className="w-3.5 h-3.5 text-blue-600" />
              <span>COREX SOFTWARE SUITE & ANDROID APK REPOSITORY</span>
            </div>
            
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-tight leading-tight">
              Proprietary Tools & Softwares.<br />
              <span className="text-blue-600">Automate, Replicate & Virtualize.</span>
            </h1>

            <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
              Direct access to CoreX's verified software products: our <strong>Social Media Automation Engine</strong>, 
              <strong> CoreX Copier</strong> real-time data synchronizer, and <strong>CoreX Cloner</strong> application virtualization sandbox.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#apk-install-guide"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200 transition-colors"
            >
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span>Installation Guide</span>
            </a>
            <button
              type="button"
              onClick={() => setShowQrModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold border border-slate-300 shadow-xs transition-colors"
            >
              <QrCode className="w-4 h-4 text-slate-700" />
              <span>Scan QR to Phone</span>
            </button>
          </div>
        </div>

        {/* Download Success Banner */}
        {downloadSuccess && (
          <div className="mb-8 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center justify-between animate-fadeIn shadow-xs">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-semibold">
                  Downloading {downloadSuccess} APK
                </p>
                <p className="text-[11px] text-emerald-700">
                  Check your browser's Downloads folder. Follow the 5-step guide below if Android asks for installation permissions.
                </p>
              </div>
            </div>
            <a
              href="#apk-install-guide"
              className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-medium shrink-0 hover:bg-emerald-700"
            >
              View Instructions
            </a>
          </div>
        )}

        {/* 3 Products Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {PRODUCTS.map((prod) => {
            const isSelected = selectedProduct.id === prod.id;
            const isWeb = prod.productType === 'web';

            return (
              <div
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className={`cursor-pointer rounded-2xl p-6 transition-all border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-blue-600 shadow-lg shadow-blue-600/10 ring-2 ring-blue-600/20'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {prod.category}
                    </span>
                    <span className="text-[10px] font-mono font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      {isWeb ? 'WEB PLATFORM' : 'ANDROID APK'}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl text-slate-950 mb-1.5 flex items-center justify-between">
                    <span>{prod.name}</span>
                    {isWeb ? (
                      <Globe className="w-4 h-4 text-blue-600 shrink-0" />
                    ) : (
                      <Smartphone className="w-4 h-4 text-slate-700 shrink-0" />
                    )}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {prod.tagline}
                  </p>

                  <div className="space-y-2 text-xs text-slate-500 font-mono py-2.5 border-t border-slate-100 mb-4">
                    <div className="flex justify-between">
                      <span>Deployment:</span>
                      <strong className="text-slate-900 font-semibold">{isWeb ? 'Cloud SaaS' : 'Direct Sideload APK'}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Version:</span>
                      <strong className="text-slate-900 font-semibold">{prod.version}</strong>
                    </div>
                    {prod.apkSize && (
                      <div className="flex justify-between">
                        <span>Package Size:</span>
                        <strong className="text-slate-900 font-semibold">{prod.apkSize}</strong>
                      </div>
                    )}
                    {prod.minAndroid && (
                      <div className="flex justify-between">
                        <span>Compatibility:</span>
                        <strong className="text-slate-700 font-medium">{prod.minAndroid}</strong>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {isWeb ? (
                    <a
                      href={prod.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Launch Automation Tool</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownloadApk(prod);
                      }}
                      disabled={downloadingId === prod.id}
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-950 hover:bg-blue-600 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2 disabled:opacity-75"
                    >
                      {downloadingId === prod.id ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Preparing Download...</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          <span>Download APK ({prod.apkSize})</span>
                        </>
                      )}
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedProduct(prod)}
                    className="w-full py-1.5 text-[11px] font-semibold text-slate-600 hover:text-blue-600 text-center transition-colors"
                  >
                    View Capabilities & Specs →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Product Deep Dive Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 mb-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Details, Highlights & Capabilities */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-blue-700 bg-blue-50 font-semibold px-2.5 py-0.5 rounded border border-blue-200">
                  {selectedProduct.category}
                </span>
                <span className="text-xs font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  {selectedProduct.version} · {selectedProduct.releaseDate}
                </span>
                {selectedProduct.apkSize && (
                  <span className="text-xs font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    {selectedProduct.apkSize}
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-950">
                  {selectedProduct.name}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {selectedProduct.tagline}
                </p>
              </div>

              {/* Highlights Chips */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
                  Core Engineering Highlights:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 shadow-2xs"
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
                  Functional Specifications:
                </div>
                <div className="space-y-2">
                  {selectedProduct.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Changelog */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs">
                <div className="font-mono text-[11px] font-bold text-slate-800 uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  What's New in {selectedProduct.version}:
                </div>
                <ul className="list-disc list-inside text-slate-600 space-y-1 pl-1">
                  {selectedProduct.changelog.map((log, idx) => (
                    <li key={idx}>{log}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Col: Technical Specs or Web Integration Hub */}
            <div className="lg:col-span-5 space-y-5 bg-slate-50 p-5 sm:p-6 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  {selectedProduct.productType === 'web' ? <Globe className="w-4 h-4 text-blue-600" /> : <Cpu className="w-4 h-4 text-blue-600" />}
                  {selectedProduct.productType === 'web' ? 'Web Software Specifications' : 'APK Package Specifications'}
                </span>
                <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                  {selectedProduct.status}
                </span>
              </div>

              {selectedProduct.productType === 'web' ? (
                /* Web Product Panel (Social Media Automation Tool) */
                <div className="space-y-4 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2">
                    <span className="text-slate-500 font-mono text-[11px]">Official Web Portal:</span>
                    <a
                      href={selectedProduct.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-mono font-semibold break-all flex items-center gap-1 text-xs"
                    >
                      <span>{selectedProduct.externalUrl}</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500 font-mono">Platform Type:</span>
                      <span className="text-slate-900 font-mono font-semibold">Cloud SaaS / Multi-Account</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500 font-mono">Supported Networks:</span>
                      <span className="text-slate-900 font-semibold">FB, IG, X, LinkedIn, TikTok, YT</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500 font-mono">Automation Modes:</span>
                      <span className="text-slate-900 font-semibold">Auto-Post, AI Captions, Smart DM</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500 font-mono">Access Security:</span>
                      <span className="text-slate-900 font-semibold">OAuth 2.0 & End-to-End Tokens</span>
                    </div>
                  </div>

                  <div className="pt-3 space-y-2.5">
                    <a
                      href={selectedProduct.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="btn-launch-web-portal"
                      className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Launch Social Media Automation Tool</span>
                    </a>

                    <p className="text-[11px] text-slate-500 text-center font-mono">
                      Opens in a secure new browser tab on direngineeringsolutionscom.com
                    </p>
                  </div>
                </div>
              ) : (
                /* APK Product Panel (CoreX Copier & CoreX Cloner) */
                <div className="space-y-4 text-xs">
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500 font-mono">Package ID:</span>
                      <span className="text-slate-900 font-mono font-semibold">{selectedProduct.packageName}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500 font-mono">Architecture:</span>
                      <span className="text-slate-900 font-mono font-semibold">arm64-v8a / armeabi-v7a</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500 font-mono">Minimum OS:</span>
                      <span className="text-slate-900 font-mono font-semibold">{selectedProduct.minAndroid}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500 font-mono">Target SDK:</span>
                      <span className="text-slate-900 font-mono font-semibold">{selectedProduct.targetAndroid}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500 font-mono">File Name:</span>
                      <span className="text-slate-900 font-mono font-semibold text-[11px] truncate max-w-[210px]">
                        {selectedProduct.downloadFilename}
                      </span>
                    </div>
                  </div>

                  {/* SHA-256 Checksum Card */}
                  {selectedProduct.sha256 && (
                    <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-600">
                        <span className="flex items-center gap-1 font-semibold text-slate-800">
                          <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                          SHA-256 Checksum
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopyHash(selectedProduct.sha256!)}
                          className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-[11px] font-semibold"
                        >
                          {copiedHash === selectedProduct.sha256 ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span className="text-emerald-700">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <div className="p-2 rounded bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-700 break-all leading-tight select-all">
                        {selectedProduct.sha256}
                      </div>
                    </div>
                  )}

                  {/* Required Permissions */}
                  {selectedProduct.permissions && selectedProduct.permissions.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block font-semibold">
                        Required Permissions:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProduct.permissions.map((perm, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-white text-[10px] font-mono text-slate-700 border border-slate-200"
                          >
                            {perm}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Download Action */}
                  <div className="pt-2 space-y-2">
                    <button
                      type="button"
                      id={`btn-download-${selectedProduct.id}`}
                      onClick={() => handleDownloadApk(selectedProduct)}
                      disabled={downloadingId === selectedProduct.id}
                      className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2"
                    >
                      {downloadingId === selectedProduct.id ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Downloading {selectedProduct.downloadFilename}...</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          <span>Download {selectedProduct.downloadFilename}</span>
                        </>
                      )}
                    </button>

                    <a
                      href="#apk-install-guide"
                      className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Read Android Installation Steps</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

        {/* Step-by-Step Android APK Installation Guide */}
        <div id="apk-install-guide" className="scroll-mt-24 pt-4">
          
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-3">
              <FileCode className="w-3.5 h-3.5 text-blue-600" />
              <span>STEP-BY-STEP INSTRUCTION GUIDE</span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-950 tracking-tight">
              How to Install CoreX APKs on Your Android Device
            </h3>

            <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              When installing APKs directly outside the Google Play Store, Android requires security confirmation. 
              Follow these 5 steps to install <strong>CoreX Copier</strong> and <strong>CoreX Cloner</strong> with total safety.
            </p>
          </div>

          {/* Stepper Navigation Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
            {APK_INSTALL_GUIDE_STEPS.map((s) => (
              <button
                key={s.step}
                type="button"
                onClick={() => setActiveStepTab(s.step)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  activeStepTab === s.step
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="text-[10px] font-mono font-bold opacity-80 mb-0.5">
                  0{s.step} / {s.badge}
                </div>
                <div className="text-xs font-bold leading-tight line-clamp-1">
                  {s.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Highlight Card */}
          {(() => {
            const currentStep = APK_INSTALL_GUIDE_STEPS.find(s => s.step === activeStepTab) || APK_INSTALL_GUIDE_STEPS[0];
            return (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs mb-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-display font-black text-xl shrink-0">
                      {currentStep.step}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-blue-700 font-bold uppercase tracking-wider">
                        STEP 0{currentStep.step} — {currentStep.badge}
                      </span>
                      <h4 className="font-display font-bold text-xl sm:text-2xl text-slate-950">
                        {currentStep.title}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start md:self-auto">
                    {currentStep.step > 1 && (
                      <button
                        type="button"
                        onClick={() => setActiveStepTab(currentStep.step - 1)}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50"
                      >
                        ← Prev Step
                      </button>
                    )}
                    {currentStep.step < 5 && (
                      <button
                        type="button"
                        onClick={() => setActiveStepTab(currentStep.step + 1)}
                        className="px-3 py-1.5 rounded-lg bg-slate-950 text-white text-xs font-semibold hover:bg-blue-600"
                      >
                        Next Step →
                      </button>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                      {currentStep.instruction}
                    </p>

                    {currentStep.tip && (
                      <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5">
                        <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-semibold block mb-0.5">Helpful Android Tip:</strong>
                          <span>{currentStep.tip}</span>
                        </div>
                      </div>
                    )}

                    {currentStep.warning && (
                      <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-semibold block mb-0.5">Caution:</strong>
                          <span>{currentStep.warning}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Visual Walkthrough Helper */}
                  <div className="lg:col-span-4 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="text-[11px] font-mono uppercase text-slate-500 font-semibold tracking-wider flex items-center gap-1.5">
                      <Smartphone className="w-3.5 h-3.5 text-blue-600" />
                      Quick Reference
                    </div>

                    <div className="space-y-2 text-xs text-slate-700">
                      {currentStep.step === 1 && (
                        <div className="p-2.5 rounded bg-white border border-slate-200 space-y-1">
                          <p className="font-semibold text-slate-900">File Storage:</p>
                          <p className="font-mono text-[11px] text-slate-500">Internal Storage → Download → CoreX-*.apk</p>
                        </div>
                      )}
                      {currentStep.step === 2 && (
                        <div className="p-2.5 rounded bg-white border border-slate-200 space-y-1">
                          <p className="font-semibold text-slate-900">Device Settings Path:</p>
                          <p className="text-[11px] text-slate-600">Settings ➔ Apps ➔ Special App Access ➔ Install unknown apps</p>
                        </div>
                      )}
                      {currentStep.step === 3 && (
                        <div className="p-2.5 rounded bg-white border border-slate-200 space-y-1">
                          <p className="font-semibold text-slate-900">Installer Dialog:</p>
                          <p className="text-[11px] text-slate-600">Tap <strong>Install</strong> when package installer appears</p>
                        </div>
                      )}
                      {currentStep.step === 4 && (
                        <div className="p-2.5 rounded bg-white border border-slate-200 space-y-1">
                          <p className="font-semibold text-slate-900">Play Protect Verification:</p>
                          <p className="text-[11px] text-slate-600">Tap <strong>"More details"</strong> ➔ Tap <strong>"Install anyway"</strong></p>
                        </div>
                      )}
                      {currentStep.step === 5 && (
                        <div className="p-2.5 rounded bg-white border border-slate-200 space-y-1">
                          <p className="font-semibold text-slate-900">Launch & Setup:</p>
                          <p className="text-[11px] text-slate-600">Open app icon from your home launcher to start using</p>
                        </div>
                      )}
                    </div>

                    <div className="pt-2 border-t border-slate-200">
                      <a
                        href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent(`Hi CoreX Engineering Team, I need assistance installing ${selectedProduct.name} on Android.`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Ask Engineer on WhatsApp</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })()}

          {/* Security Assurance Card */}
          <div className="p-6 rounded-2xl bg-slate-950 text-white border border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white">
                  Cryptographic Integrity & Enterprise Signing
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mt-0.5">
                  All CoreX APK packages are signed with our enterprise private certificate ({APK_SECURITY_INFO.signingAuthority}) and verified against tamper protection before release.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#contact"
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all"
              >
                Request Custom Enterprise Build
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* QR Code Modal for Mobile Camera Scanning */}
      {showQrModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-sm bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 text-slate-900">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <QrCode className="w-5 h-5 text-blue-600" />
                <h3 className="font-display font-bold text-base text-slate-950">
                  Scan to Install APK
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowQrModal(false)}
                className="text-slate-400 hover:text-slate-700 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-xl bg-white border-2 border-slate-900 shadow-inner">
                <svg viewBox="0 0 100 100" className="w-44 h-44 fill-current text-slate-950">
                  <rect x="5" y="5" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="6" rx="2" />
                  <rect x="12" y="12" width="14" height="14" fill="currentColor" />
                  <rect x="67" y="5" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="6" rx="2" />
                  <rect x="74" y="12" width="14" height="14" fill="currentColor" />
                  <rect x="5" y="67" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="6" rx="2" />
                  <rect x="12" y="74" width="14" height="14" fill="currentColor" />
                  <rect x="40" y="8" width="6" height="6" fill="#2563eb" />
                  <rect x="52" y="16" width="6" height="6" fill="currentColor" />
                  <rect x="40" y="24" width="6" height="6" fill="currentColor" />
                  <rect x="50" y="32" width="8" height="8" fill="#2563eb" />
                  <rect x="8" y="44" width="6" height="6" fill="currentColor" />
                  <rect x="22" y="48" width="6" height="6" fill="currentColor" />
                  <rect x="36" y="48" width="8" height="8" fill="currentColor" />
                  <rect x="50" y="48" width="6" height="6" fill="#2563eb" />
                  <rect x="64" y="44" width="6" height="6" fill="currentColor" />
                  <rect x="78" y="48" width="6" height="6" fill="currentColor" />
                  <rect x="40" y="64" width="6" height="6" fill="currentColor" />
                  <rect x="52" y="68" width="6" height="6" fill="currentColor" />
                  <rect x="68" y="68" width="6" height="6" fill="#2563eb" />
                  <rect x="80" y="78" width="8" height="8" fill="currentColor" />
                  <rect x="44" y="80" width="6" height="6" fill="currentColor" />
                  <rect x="56" y="84" width="6" height="6" fill="#2563eb" />
                </svg>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-semibold text-slate-900">
                  Scan with your Android Camera
                </p>
                <p className="text-[11px] text-slate-500">
                  {selectedProduct.productType === 'web'
                    ? `Opens ${selectedProduct.name} portal on your phone.`
                    : `Instantly triggers direct download of ${selectedProduct.name} (${selectedProduct.version}).`}
                </p>
              </div>

              {selectedProduct.productType === 'web' ? (
                <a
                  href={selectedProduct.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open direngineeringsolutionscom.com</span>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => handleDownloadApk(selectedProduct)}
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Or Download on this Computer</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
